const MAXITER = 1e3;
const BREAK_LIM = 1e-5;

const COLOR1 = new Uint8ClampedArray(3);
const COLOR2 = new Uint8ClampedArray(3);
const COLOR3 = new Uint8ClampedArray(3);
const COLOR4 = new Uint8ClampedArray(3);
const COLOR5 = new Uint8ClampedArray(3);

function abs(real, imag) {
    return Math.sqrt(real * real + imag * imag);
}

function mandel_update(real, imag, c_real, c_imag) {
    return [real * real - imag * imag + c_real, 2 * real * imag + c_imag];
}

function mandel_iter(real, imag) {
    let z_real = real;
    let z_imag = imag;
    let i  = MAXITER;
    let absz;
    while (i > 0) {
        absz = abs(z_real, z_imag);
        if (absz > 2) {
            break;
        }
        [z_real, z_imag] = mandel_update(z_real, z_imag, real, imag);
        if (absz < BREAK_LIM) {
            i = 0;
        }
        else {
            i--;
        }
    }
    if (i == 0) {
        return -Math.pow(((absz-2) / 2), 4);
    }
    else {
        return i / MAXITER;
    }
}

function get_color(x, channel) {
    let y;
    let out;
    if (x < 0) {
        y = -x;
        out = y * COLOR5[channel] + (1-y) * COLOR4[channel];
    }
    else if (x < 0.25) {
        y = x * 4;
        out = y * COLOR3[channel] + (1-y) * COLOR4[channel];
    }
    else if (x < 0.5) {
        y = (x - 0.25) * 4;
        out = y * COLOR2[channel] + (1-y) * COLOR3[channel];
    }
    else {
        y = x * 2 - 1;
        out = y * COLOR1[channel] + (1-y) * COLOR2[channel];
    }
    return out;
}

function draw_mandelbrot(pixelwidth, pixelheight, xstart, xstop, ystart, ystop) {
    let width = xstop - xstart;
    let height = ystop - ystart;
    let wstep = width / (pixelwidth -1);
    let x = Array.from({length: pixelwidth}, (_, i) => xstart + i * wstep);
    let hstep = height / (pixelheight - 1);
    let y = Array.from({length: pixelheight}, (_, i) => ystart + i * hstep);
    const flat_data = new Uint8ClampedArray(pixelwidth * pixelheight * 4);
    for (let i = 0; i < pixelwidth; i++) {
        for (let j = 0; j < pixelheight; j++) {
            let val = mandel_iter(x[i], y[j]);
            let base_idx = 4 * (i + pixelwidth * j);
            flat_data[base_idx] = get_color(val, 0);
            flat_data[base_idx + 1] = get_color(val, 1);
            flat_data[base_idx + 2] = get_color(val, 2);
            flat_data[base_idx + 3] = 255;
        }
    }
    return flat_data;
}

function change_colors(data) {
    COLOR1.set(data.color1);
    COLOR2.set(data.color2);
    COLOR3.set(data.color3);
    COLOR4.set(data.color4);
    COLOR5.set(data.color5);
}

onmessage = function(e) {
    if (e.data.type == 'change_colors') {
        change_colors(e.data);
    }
    else {
        let return_data = draw_mandelbrot(e.data.pixelwidth, e.data.pixelheight,
                                          e.data.xstart, e.data.xstop,
                                          e.data.ystart, e.data.ystop);
        postMessage({type: e.data.type, id: e.data.id, array: return_data});
    }
}


postMessage('ready');
