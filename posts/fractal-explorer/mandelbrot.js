let nproc = window.navigator.hardwareConcurrency;

const pan_factor = 10;
const zoom_factor = 2;

var xstart = -2.0;
var xstop = 1.0;
var ystart = -1.5;
var ystop = 1.5;

var workers_ready = 0;
var workers_running = 0;
const workers = [];
var data = {}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');  // too bad if your browser doesn't support this
const status = document.getElementById('status');


// function for updating image in html canvas with new Uint8Array `data`
function updateCanvas(data) {
    
}

function combine_data() {
    // get cumulative lengths for index offsets
    let offsets = [0];
    for (let i = 0; i < nproc; i++) {
        offsets.push(offsets[i] + data[i].length);
    }
    let agg_data = new Uint8ClampedArray(offsets[nproc]);
    for (let i = 0; i < nproc; i++) {
        agg_data.set(data[i], offsets[i])
    }
    return agg_data
}

// define message to respond to message from web workers
function onmessage(e) {
    // recieved "ready" message
    if (e.data == 'ready') {
        workers_ready++;
    }
    else if (e.data.type == 'all_compute') {
        // recieved compute data message
        workers_running--;
        console.log("got data from " + e.data.id);
        data[e.data.id] = e.data.array;
        if (workers_running == 0) {
            // compile and update image
            let image_data = context.createImageData(canvas.width, canvas.height);
            image_data.data.set(combine_data());
            context.putImageData(image_data, 0, 0);
            status.style.visibility = 'hidden';
        }
    }
    else if (e.data.type == 'left') {
        // recieved shift left message
        workers_running--;
        console.log("got shift left from " + e.data.id);
        data[e.data.id] = e.data.array;
        if (workers_running == 0) {
            let new_data = context.createImageData(Math.floor(canvas.width / pan_factor), canvas.height);
            new_data.data.set(combine_data());
            context.putImageData(new_data, 0, 0);
            status.style.visibility = 'hidden';
        }
    }
    else if (e.data.type == 'right') {
        // recieved shift right message
        workers_running--;
        console.log("got shift right from " + e.data.id);
        data[e.data.id] = e.data.array;
        if (workers_running == 0) {
            let split_x = Math.floor(canvas.width / pan_factor);
            let new_data = context.createImageData(split_x, canvas.height);
            new_data.data.set(combine_data());
            context.putImageData(new_data, canvas.width - split_x, 0);
            status.style.visibility = 'hidden';
        }
    }
    else if (e.data.type == 'up') {
        // recieved shift up message
        workers_running--;
        console.log("got shift up from " + e.data.id);
        data[e.data.id] = e.data.array;
        if (workers_running == 0) {
            let new_data = context.createImageData(canvas.width, Math.floor(canvas.height / pan_factor));
            new_data.data.set(combine_data());
            context.putImageData(new_data, 0, 0);
            status.style.visibility = 'hidden';
        }
    }
    else if (e.data.type == 'down') {
        // recieved shift down message
        workers_running--;
        console.log("got shift down from " + e.data.id);
        data[e.data.id] = e.data.array;
        if (workers_running == 0) {
            let split_y = Math.floor(canvas.height / pan_factor);
            let new_data = context.createImageData(canvas.width, split_y);
            let combined = combine_data();
            new_data.data.set(combined);
            context.putImageData(new_data, 0, canvas.height - split_y);
            status.style.visibility = 'hidden';
        }
    }
}

// use web workers to generate new image data
function draw(pixelwidth=canvas.width, pixelheight=canvas.height,
              xstart_=xstart, xstop_=xstop, ystart_=ystart, ystop_=ystop, type='all_compute') {
    status.style.visibility = 'visible';
    let default_chunk_pixelheight = Math.floor(pixelheight / nproc);
    let chunk_remainder = pixelheight % default_chunk_pixelheight;
    let default_chunk_height = (ystop_ - ystart_) * (1 - chunk_remainder / pixelheight) / nproc;
    data = {};
    for (let i = 0; i < nproc; i++) {
        let chunk_pixelheight = default_chunk_pixelheight;
        if (i == nproc - 1) {
            chunk_pixelheight += chunk_remainder;
        }
        let chunk_ystart = ystart_ + i * default_chunk_height;
        let chunk_ystop = ((i == nproc - 1) ? ystop_ : chunk_ystart + default_chunk_height);
        workers[i].postMessage({type: type,
                                id: i,
                                pixelwidth: pixelwidth,
                                pixelheight: chunk_pixelheight,
                                xstart: xstart_,
                                xstop: xstop_,
                                ystart: chunk_ystart,
                                ystop: chunk_ystop});
        workers_running++;
    }
}

// move left 10%
function moveLeft() {
    if (workers_running != 0) return;
    let split_x = Math.floor(canvas.width / pan_factor);
    // move existing image right
    let to_keep = context.getImageData(0, 0, canvas.width - split_x, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(to_keep, split_x, 0);
    // generate new section
    let new_xstart = xstart - (xstop - xstart) / pan_factor;
    let new_xstop = xstop - (xstop - xstart) / pan_factor;
    draw(split_x, canvas.height,
         new_xstart, xstart, ystart, ystop, type='left');
    // update xstart and xstop
    xstart = new_xstart;
    xstop = new_xstop;
}

// move left 10%
function moveRight() {
    if (workers_running != 0) return;
    let split_x = Math.floor(canvas.width / pan_factor);
    // move existing image left
    let to_keep = context.getImageData(split_x, 0, canvas.width - split_x, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(to_keep, 0, 0);
    // generate new section
    let new_xstart = xstart + (xstop - xstart) / pan_factor;
    let new_xstop = xstop + (xstop - xstart) / pan_factor;
    draw(split_x, canvas.height,
         xstop, new_xstop, ystart, ystop, type='right');
    // update xstart and xstop
    xstart = new_xstart;
    xstop = new_xstop;
}

// move up 10%
function moveUp() {
    if (workers_running != 0) return;
    let split_y = Math.floor(canvas.height / pan_factor);
    // move existing image down
    let to_keep = context.getImageData(0, 0, canvas.width, canvas.height - split_y);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(to_keep, 0, split_y);
    // generate new section
    let new_ystart = ystart - (ystop - ystart) / pan_factor;
    let new_ystop = ystop - (ystop - ystart) / pan_factor;
    draw(canvas.width, split_y,
         xstart, xstop, new_ystart, ystart, type='up');
    // update ystart and ystop
    ystart = new_ystart;
    ystop = new_ystop;
}

// move down 10%
function moveDown() {
    if (workers_running != 0) return;
    let split_y = Math.floor(canvas.height / pan_factor);
    // move existing image up
    let to_keep = context.getImageData(0, split_y, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(to_keep, 0, 0);
    // generate new sectionRight
    let new_ystart = ystart + (ystop - ystart) / pan_factor;
    let new_ystop = ystop + (ystop - ystart) / pan_factor;
    draw(canvas.width, split_y,
         xstart, xstop, ystop, new_ystop, type='down');
    // update ystart and ystop
    ystart = new_ystart;
    ystop = new_ystop;
}

function zoomIn() {
    // create temporary zoomed image
    let image_center = context.getImageData(canvas.width / (zoom_factor*2),
                                        canvas.height / (zoom_factor*2),
                                        canvas.width / zoom_factor,
                                        canvas.height / zoom_factor);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(image_center, 0, 0);
    context.drawImage(canvas, 0, 0,
                      canvas.width / zoom_factor,
                      canvas.height / zoom_factor,
                      0, 0,
                      canvas.width, canvas.height);
    // update image coordinates and call draw()
    let new_xradius = (xstop - xstart) / (zoom_factor*2);
    let new_yradius = (ystop - ystart) / (zoom_factor*2);
    let x_center = (xstart + xstop) / 2;
    let y_center = (ystart + ystop) / 2;
    xstart = x_center - new_xradius;
    xstop = x_center + new_xradius;
    ystart = y_center - new_yradius;
    ystop = y_center + new_yradius;
    draw();
}

function zoomOut() {
    // create temporary zoomed image
    context.drawImage(canvas, 0, 0,
                      canvas.width,
                      canvas.height,
                      canvas.width / (zoom_factor*2),
                      canvas.height / (zoom_factor*2),
                      canvas.width / zoom_factor,
                      canvas.height / zoom_factor);
    // update image coordinates and call draw()
    let new_xradius = (xstop - xstart) / (zoom_factor*2);
    let new_yradius = (ystop - ystart) / (zoom_factor*2);
    let x_center = (xstart + xstop) / 2;
    let y_center = (ystart + ystop) / 2;
    xstart = x_center - new_xradius;
    xstop = x_center + new_xradius;
    ystart = y_center - new_yradius;
    ystop = y_center + new_yradius;
    draw();
}

function setSize() {
    let width_box = document.getElementById('width');
    let height_box = document.getElementById('height');
    let new_width = ((width_box.value != '') ? parseInt(width_box.value) : canvas.width);
    let new_height = ((height_box.value != '') ? parseInt(height_box.value) : canvas.height);
    width_box.value = '';
    height_box.value = '';
    if (isNaN(new_width) || new_width <= 0) {
        alert('Width must be a positive whole number');
        return;
    }
    if (isNaN(new_height) || new_height <= 0) {
        alert('Width must be a positive whole number');
        return;
    }
    canvas.width = new_width;
    canvas.height = new_height;
    width_box.placeholder = new_width;
    height_box.placeholder = new_height;
    let yradius = (ystop - ystart) / 2;
    let xradius = yradius * new_width / new_height;
    let x_center = (xstart + xstop) / 2;
    xstart = x_center - xradius;
    xstop = x_center + xradius;
    draw();
}
    
    

// start web workers
for (let i = 0; i < nproc; i++) {
    // note we have to use the path relative to the parent page here
    let worker = new Worker('./worker.js');
    worker.addEventListener('message', onmessage);
    workers.push(worker);
}

// wait for all workers ready before drawing for the first time
function awaitWorkersReady() {
    if (workers_ready < nproc) {
        // try again in 250 ms
        setTimeout(awaitWorkersReady, 250);
    }
    else {
        draw();
    }
}

awaitWorkersReady();
