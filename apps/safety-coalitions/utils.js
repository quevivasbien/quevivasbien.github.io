export function fill_blocks(values, parent, color0 = "#C6000D", color1 = "#6CC600") {
    parent.replaceChildren();
    for (let v of values) {
        v = Math.max(0, Math.min(1, v));
        let block = document.createElement("span");
        block.style.color = mix_colors(color0, color1, v);
        block.innerHTML = "&#9608; ";
        parent.appendChild(block);
    }
}
  
function mix_colors(c1, c2, p) {
    let rgb1 = color_to_rgb(c1);
    let rgb2 = color_to_rgb(c2);
    let rgb = rgb1.map((v, i) => parseInt(v * (1 - p) + rgb2[i] * p));
    return rgb_to_color(rgb);
}

function color_to_rgb(color) {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
    return [r, g, b];
}

function rgb_to_color(rgb) {
    let r = rgb[0].toString(16).padStart(2, "0");
    let g = rgb[1].toString(16).padStart(2, "0");
    let b = rgb[2].toString(16).padStart(2, "0");
    return "#" + r + g + b;
}

export function round_to(x, n) {
    return Math.round(x * 10 ** n) / 10 ** n;
}

export function expand_scalar(x, n) {
    if (Array.isArray(x)) {
        if (x.length != n) {
            throw "array must have length equal to n";
        }
        return x;
    }
    else {
        return Array(n).fill(x);
    }
}
