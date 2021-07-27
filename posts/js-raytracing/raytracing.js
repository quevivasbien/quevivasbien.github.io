const LIGHT_TOL = -0.005;
const HALO_DROPOFF = 1;
const HALO_THRESHOLD = 0.01;
const MAX_DEPTH = 3;
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
            specular: 0.1,
            lambert: 0.7,
            ambient: 0.1,
            radius: 2,
            mass: 1
        },
        {
            type: "sphere",
            position: [-4, 2, -12],
            velocity: [0, 0.5, 0],
            color: [155, 155, 155],
            specular: 0.8,
            lambert: 0.5,
            ambient: 0,
            radius: 1,
            mass: 0.1
        },
        {
            type: "sphere",
            position: [24, 24, -20],
            velocity: [0.1, -0.1, 0],
            color: [155, 100, 100],
            specular: 0,
            lambert: 0.9,
            ambient: 0.1,
            radius: 0.5,
            mass: 0.02
        },
    ]
};

// generate thresholds for light sources in scene
// (thresholds are distances past which their halos can't be seen)
function setLightThreshold(light) {
    light.threshold = -Math.log(HALO_THRESHOLD / light.intensity) / HALO_DROPOFF;
}

for (let i = 0; i < scene.lights.length; i++) {
    setLightThreshold(scene.lights[i]);
}


function getNormal(object, position) {
    return Vec.getUnitVec(Vec.subtract(position, object.position));
}

// function to figure out where (if at all) a ray intersects with an object
function objectIntersection(object, ray) {
    // for now we have only spheres, so we'll just implement that
    // see https://www.scratchapixel.com/lessons/3d-basic-rendering/minimal-ray-tracer-rendering-simple-shapes/ray-sphere-intersection
    // check that the object is not the object emitting the ray
    if (object == ray.origin) return;
    // now do some vector math
    let eye_to_center = Vec.subtract(object.position, ray.position);
    let scalar_prod = Vec.dot(eye_to_center, ray.direction);
    if (scalar_prod < 0) return;  // wrong direction
    let rsq = Vec.normsq(eye_to_center) - scalar_prod**2;
    let Rsq = object.radius**2;
    if (rsq > Rsq) return;  // no intersection
    let seg_in_obj = Math.sqrt(Rsq - rsq);
    return scalar_prod - seg_in_obj;
}

// function to figure out what a ray hits (if anything)
function intersectWithScene(ray) {
    let closest = [Infinity, null];
    for (let i = 0; i < scene.objects.length; i++) {
        let object = scene.objects[i];
        let distance = objectIntersection(object, ray);
        if (distance !== undefined && distance < closest[0]) {
            closest = [distance, object];
        }
    }
    return closest;
}

function isLightVisible(position, light_position) {
    let intersection = intersectWithScene(
        {
            position: position,
            direction: Vec.getUnitVec(Vec.subtract(position, light_position))
        }
    );
    return (intersection[0] > LIGHT_TOL);
}


// get light at a particular intersection point
function interactWithSurface(ray, object, position, normal, depth) {
    let specular_color = Vec.ZERO;
    let lambert_shading = 0;
    if (object.lambert) {
        for (let i = 0; i < scene.lights.length; i++) {
            let light = scene.lights[i];
            if (!isLightVisible(position, light.position)) continue;
            let contribution = light.intensity * Vec.dot(
                Vec.getUnitVec(Vec.subtract(light.position, position)),
                normal
            );
            if (contribution > 0) {
                lambert_shading += contribution;
            }
        }
        lambert_shading = Math.min(1, lambert_shading);
    }
    if (object.specular) {
        let offset_position = Vec.add(
          position,
          Vec.scale(normal, 0.1)
        );
        let reflected_ray = {
            position: position,
            direction: Vec.reflect(ray.direction, normal),
            origin: object
        };
        let reflected_color = trace(reflected_ray, depth+1);
        let specular_color = Vec.scale(reflected_color, object.specular);
        return Vec.add3(
          specular_color,
          Vec.scale(object.color, lambert_shading * object.lambert),
          Vec.scale(object.color, object.ambient)
        )
    }
    else {
      return Vec.add(
        Vec.scale(object.color, lambert_shading * object.lambert),
        Vec.scale(object.color, object.ambient)
      )
    }
}

// if a light source is close enough to the path of the ray, display light
// allows light sources to be visible to the camera
function checkForLight(ray) {
    let out = Vec.ZERO;
    for (let i  = 0; i < scene.lights.length; i++) {
        let light = scene.lights[i];
        // get scalar projection of ray between camera and light onto ray
        let camera_to_light = Vec.subtract(light.position, ray.position);
        let scalar_prod = Vec.dot(camera_to_light, ray.direction);
        if (scalar_prod < 0) continue;  // facing the wrong way
        // get distance between projected ray and light, then calculate light intensity
        let distance = Math.sqrt(Vec.normsq(camera_to_light) - scalar_prod**2);
        if (distance > light.threshold) {
            continue;
        }
        else {
            let intensity = light.intensity * Math.exp(-HALO_DROPOFF * distance);
            out = Vec.add(out, Vec.scale(Vec.WHITE, intensity));
        }
    }
    return out;
}

// define the function to trace a single ray
function trace(ray, depth) {
    if (depth > MAX_DEPTH) return Vec.ZERO;
    let intersection = intersectWithScene(ray);
    if (intersection[0] === Infinity) {
        // check if light sources are themselves visible
        return checkForLight(ray);
    }
    let distance = intersection[0];
    let object = intersection[1];
    let position = Vec.add(ray.position, Vec.scale(ray.direction, distance));
    return interactWithSurface(
        ray,
        object,
        position,
        getNormal(object, position),
        depth
    );
}

// define the rendering function
function render() {
    // unpack the scene
    let camera = scene.camera;
    let objects = scene.objects;
    let lights = scene.lights;
    // set up the variables we'll need
    let hw_ratio = canvas.height / canvas.width;
    let half_width = Math.tan(camera.field_of_view);
    let half_height = hw_ratio * half_width;
    let camera_width = half_width * 2;
    let camera_height = half_height * 2;
    let pixelwidth = camera_width / (canvas.width - 1);
    let pixelheight = camera_height / (canvas.height - 1);
    let idx, color;
    let ray = {position: camera.position};
    // iterate through the pixels in view
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let x_component = Vec.scale(camera.right, x * pixelwidth - half_width);
            let y_component = Vec.scale(camera.up, y * pixelheight - half_height);
            ray.direction = Vec.getUnitVec(Vec.add3(camera.forward, x_component, y_component));
            // send to raytracing function
            color = trace(ray, 0);
            // find coordinates in data array and set colors
            idx = (x + y * canvas.width) * 4;
            img_data.data[idx] = color[0];
            img_data.data[idx+1] = color[1];
            img_data.data[idx+2] = color[2];
            img_data.data[idx+3] = 255; // alpha component is always 255
        }
    }
    context.putImageData(img_data, 0, 0);
}

// function flashButton(button_id) {
//     let button = document.getElementById(button_id);
//     let original_color = button.style.background;
//     button.style.background = '#f08456';
//     setTimeout(() => {button.style.background = original_color;}, 100);
// }

function panRight() {
    let camera = scene.camera;
    scene.camera.position = Vec.add(
        camera.position,
        Vec.scale(camera.right, MOVEMENT_SPEED)
    );
}

function panLeft() {
    let camera = scene.camera;
    scene.camera.position = Vec.subtract(
        camera.position,
        Vec.scale(camera.right, MOVEMENT_SPEED)
    );
}

function panUp() {
    let camera = scene.camera;
    scene.camera.position = Vec.subtract(
        camera.position,
        Vec.scale(camera.up, MOVEMENT_SPEED)
    );
}

function panDown() {
    let camera = scene.camera;
    scene.camera.position = Vec.add(
        camera.position,
        Vec.scale(camera.up, MOVEMENT_SPEED)
    );
}

function rotateLeft() {
    let camera = scene.camera;
    // rotate forward and right vectors around up vector
    camera.right = Vec.rotate(camera.right, camera.up, ROTATE_ANGLE);
    camera.forward = Vec.cross(camera.up, camera.right);
}

function rotateRight() {
    let camera = scene.camera;
    // rotate forward and right vectors around up vector
    camera.right = Vec.rotate(camera.right, camera.up, -ROTATE_ANGLE);
    camera.forward = Vec.cross(camera.up, camera.right);
}

function rotateUp() {
    let camera = scene.camera;
    // rotate forward and up vectors about right vector
    camera.forward = Vec.rotate(camera.forward, camera.right, -ROTATE_ANGLE);
    camera.up = Vec.cross(camera.right, camera.forward);
}

function rotateDown() {
    let camera = scene.camera;
    // rotate forward and up vectors about right vector
    camera.forward = Vec.rotate(camera.forward, camera.right, ROTATE_ANGLE);
    camera.up = Vec.cross(camera.right, camera.forward);
}

function zoomIn() {
    let camera = scene.camera;
    scene.camera.position = Vec.add(camera.position, camera.forward);
}

function zoomOut() {
    let camera = scene.camera;
    scene.camera.position = Vec.subtract(camera.position, camera.forward);
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
    }
}

function makeNextFrame() {
    render();
    timeStep();
    if (go) {
        window.requestAnimationFrame(makeNextFrame);
    }
}

/*
// rendering is handled by a webworker
var worker = new Worker('./render_scene.js');

worker.onmessage = function(mssg) {
    context.putImageData(mssg.data, 0, 0);
}


function startRendering() {
    worker.postMessage({flag: "start", img_data: img_data, scene: scene});
}

startRendering();*/
window.requestAnimationFrame(makeNextFrame);
