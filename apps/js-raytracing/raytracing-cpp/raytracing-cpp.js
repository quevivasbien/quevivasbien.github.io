const REFRESH_WAIT = 10;
const MOVEMENT_SPEED = 2;
const ROTATE_ANGLE = Math.PI / 32;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img_data = context.getImageData(0, 0, canvas.width, canvas.height);

var go = true;

// set up the scene
var scene = {
    camera: {
        position: [20.32425330064319, 2, -16.983277196768423], //[0, 0, 0],
        // forward up and right should be unit vectors
        forward: [-0.9807852804032303, 0, 0.1950903220161282], //[0, 0, -1],
        up: [0, 1, 0],
        right: [-0.1950903220161282, 0, -0.9807852804032303], //[1, 0, 0],
        field_of_view: Math.PI / 4
    },
    lights: [
        {
            position: [-30, -10, 20],
            intensity: 1.0
        },
    ],
    objects: [
        {
            type: "sphere",
            position: [0, 0, -15],
            velocity: [0, -0.05, 0],
            color: [20, 100, 120],
            specular: 0.8,
            lambert: 0.2,
            ambient: 0.1,
            radius: 2,
            mass: 1
        },
        {
            type: "sphere",
            position: [-4, 2, -12],
            velocity: [0, 0.5, 0],
            color: [155, 155, 155],
            specular: 0.3,
            lambert: 0.9,
            ambient: 0,
            radius: 1,
            mass: 0.1
        },
        {
            type: "sphere",
            position: [24, 24, -20],
            velocity: [0.1, -0.1, 0],
            color: [155, 100, 100],
            specular: 0.1,
            lambert: 0.9,
            ambient: 0.1,
            radius: 0.5,
            mass: 0.02
        },
    ]
};


function render() {
    // go through the complicated process of retrieving array data from the c heap
    let output_length = canvas.width * canvas.height * 4;
    const return_data = new Uint8ClampedArray(output_length);
    let result_ptr = scene.worker.render();
    // result is a pointer to a C memory location
    for (let v=0; v < output_length; v++) {
        return_data[v] = Module.HEAPU8[result_ptr / Uint8Array.BYTES_PER_ELEMENT + v];
    }
    // update the visuals
    img_data.data.set(return_data);
    context.putImageData(img_data, 0, 0);
}

// have some simple gravity physics move the objects around
function timeStep() {
    for (let i = 0; i < scene.objects.length - 1; i++) {
        for (let j = i+1; j < scene.objects.length; j++) {
            let object1 = scene.objects[i];
            let object2 = scene.objects[j];
            let delta = Vec.subtract(object1.position, object2.position);
            let distance_cubed = Vec.normsq(delta) ** 1.5;
            let force = Vec.scale(delta, object1.mass * object2.mass / distance_cubed);
            object1.velocity = Vec.subtract(object1.velocity, Vec.scale(force, 1 / object1.mass));
            object2.velocity = Vec.add(object2.velocity, Vec.scale(force, 1 / object2.mass));
        }
    }
    for (let i = 0; i < scene.objects.length; i++) {
        let object = scene.objects[i];
        object.position = Vec.add(object.position, object.velocity);
        // update worker variables
        scene.worker.editObject(i, object.position[0], object.position[1], object.position[2]);
    }
}

// function flashButton(button_id) {
//     let button = document.getElementById(button_id);
//     let original_color = button.style.background;
//     button.style.background = '#f08456';
//     setTimeout(() => {button.style.background = original_color;}, 100);
// }

function updateCamera() {
    let camera = scene.camera;
    scene.worker.editCamera(
        camera.position[0], camera.position[1], camera.position[2],
        camera.forward[0], camera.forward[1], camera.forward[2],
        camera.up[0], scene.camera.up[1], camera.up[2],
        camera.right[0], camera.right[1], camera.right[2]
    );
}

function panRight() {
    let camera = scene.camera;
    scene.camera.position = Vec.add(
        camera.position,
        Vec.scale(camera.right, MOVEMENT_SPEED)
    );
    updateCamera();
}

function panLeft() {
    let camera = scene.camera;
    scene.camera.position = Vec.subtract(
        camera.position,
        Vec.scale(camera.right, MOVEMENT_SPEED)
    );
    updateCamera();
}

function panUp() {
    let camera = scene.camera;
    scene.camera.position = Vec.subtract(
        camera.position,
        Vec.scale(camera.up, MOVEMENT_SPEED)
    );
    updateCamera();
}

function panDown() {
    let camera = scene.camera;
    scene.camera.position = Vec.add(
        camera.position,
        Vec.scale(camera.up, MOVEMENT_SPEED)
    );
    updateCamera();
}

function rotateLeft() {
    let camera = scene.camera;
    // rotate forward and right vectors around up vector
    camera.right = Vec.rotate(camera.right, camera.up, ROTATE_ANGLE);
    camera.forward = Vec.cross(camera.up, camera.right);
    updateCamera();
}

function rotateRight() {
    let camera = scene.camera;
    // rotate forward and right vectors around up vector
    camera.right = Vec.rotate(camera.right, camera.up, -ROTATE_ANGLE);
    camera.forward = Vec.cross(camera.up, camera.right);
    updateCamera();
}

function rotateUp() {
    let camera = scene.camera;
    // rotate forward and up vectors about right vector
    camera.forward = Vec.rotate(camera.forward, camera.right, ROTATE_ANGLE);
    camera.up = Vec.cross(camera.right, camera.forward);
    updateCamera();
}

function rotateDown() {
    let camera = scene.camera;
    // rotate forward and up vectors about right vector
    camera.forward = Vec.rotate(camera.forward, camera.right, -ROTATE_ANGLE);
    camera.up = Vec.cross(camera.right, camera.forward);
    updateCamera();
}

function zoomIn() {
    let camera = scene.camera;
    scene.camera.position = Vec.add(camera.position, camera.forward);
    updateCamera();
}

function zoomOut() {
    let camera = scene.camera;
    scene.camera.position = Vec.subtract(camera.position, camera.forward);
    updateCamera();
}



function makeNextFrame() {
    render();
    timeStep();
    if (go) {
        // maximum possible fps is 1000 / REFRESH_WAIT
        window.requestAnimationFrame(makeNextFrame);
    }
}


function createSceneWorker() {
    sceneWorker = new Module.Scene(
        canvas.width, canvas.height,
        scene.camera.position[0], scene.camera.position[1],  scene.camera.position[2],
        scene.camera.forward[0], scene.camera.forward[1], scene.camera.forward[2],
        scene.camera.up[0], scene.camera.up[1], scene.camera.up[2],
        scene.camera.right[0], scene.camera.right[1], scene.camera.right[2],
        scene.camera.field_of_view
    );

    for (let i = 0; i < scene.lights.length; i++) {
        let light = scene.lights[i];
        sceneWorker.addLight(light.position[0], light.position[1], light.position[2], light.intensity);
    }

    for (let i = 0; i < scene.objects.length; i++) {
        let object = scene.objects[i];
        sceneWorker.addObject(
            object.position[0], object.position[1], object.position[2],
            object.color[0], object.color[1], object.color[2],
            object.specular, object.lambert, object.ambient, object.radius
        );
    }
    return sceneWorker;
}

function start() {
    scene.worker = createSceneWorker();
    window.requestAnimationFrame(makeNextFrame);
}

function exit() {
    scene.worker.delete();
}
