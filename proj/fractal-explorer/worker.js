importScripts('./wasm.js');

Module.onRuntimeInitialized = function () {
    postMessage('ready');
}

drawImage = function(width, height, xstart, xstop, ystart, ystop) {
    let input_length = width * height;
    let output_length = input_length * 4;
    let result_ptr;
    const return_data = new Uint8ClampedArray(output_length);
    let error;
    try {
        result_ptr = Module._draw_mandelbrot(width, height, xstart, xstop, ystart, ystop);
        // result is a pointer to a C memory location        
        for (let v=0; v < output_length; v++) {
            return_data[v] = Module.HEAPU8[result_ptr / Uint8Array.BYTES_PER_ELEMENT + v];
        }
    }
    catch (e) {
        console.log("error: " + e);
        error = e;
    }
    // don't think this is actually necessary?
//     finally {
//         // free heap memory
//         Module._free(result_ptr);
//     }
    if (error) {
        throw error;
    }
    return return_data;
}

onmessage = function(e) {
    let return_data = drawImage(e.data.pixelwidth, e.data.pixelheight,
                                e.data.xstart, e.data.xstop,
                                e.data.ystart, e.data.ystop);
    postMessage({type: e.data.type, id: e.data.id, array: return_data});
}
