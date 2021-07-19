function drawImage(canvas_width, canvas_height) {
    let input_length = canvas_width * canvas_height;
    let output_length = input_length * 4;
    let result = Module.ccall("draw_mandelbrot", null,
                              ["number", "number", "number", "number", "number", "number"],
                              [canvas_width, canvas_height, -2.0, 1.0, -1.5, 1.5]);
    // result is a pointer to a C memory location
    const return_data = new Uint8ClampedArray(output_length);
    for (let v=0; v < output_length; v++) {
        return_data[v] = Module.HEAPU8[result / Uint8Array.BYTES_PER_ELEMENT + v];
    }
    console.log(return_data);
    return return_data;
}


function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const context = canvas.getContext('2d');
        const image_data = context.createImageData(canvas.width, canvas.height);
        image_data.data.set(drawImage(canvas.width, canvas.height));
        context.putImageData(image_data, 0, 0);
    }
}
