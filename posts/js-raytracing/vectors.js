// Functions for working with 3d vectors (expressed as js lists of len 3)

var Vec = {};


Vec.I = [1, 0, 0];
Vec.J = [0, 1, 0];
Vec.K = [0, 0, 1];

Vec.WHITE = [255, 255, 255];
Vec.ZERO = [0, 0, 0];
Vec.getZero = () => [0, 0, 0];


Vec.dot = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

Vec.cross = function(a, b) {
    // cross product
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}

Vec.scale = function(a, c) {
    return [a[0] * c, a[1] * c, a[2] * c];
}

Vec.normsq = function(a) {
    // get the squared norm of a
    return Vec.dot(a, a);
}

Vec.getUnitVec = function(a) {
    return Vec.scale(a, 1 / Math.sqrt(Vec.normsq(a)));
}

Vec.addc = function(a, c) {
    return [a[0] + c, a[1] + c, a[2] + c]
}

Vec.add = function(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

Vec.add3 = function(a, b, c) {
    return [a[0] + b[0] + c[0], a[1] + b[1] + c[1], a[2] + b[2] + c[2]];
}

Vec.subtract = function(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

Vec.reflect = function(a, normal) {
    // reflect a over a normal vector
    let d = Vec.scale(normal, 2 * Vec.dot(a, normal));
    return Vec.scale(Vec.subtract(d, a), -1);
}

Vec.proj = function(a, b) {
    // project a onto b
    let scalar = Vec.dot(a, b) / Vec.normsq(b);
    return Vec.scale(b, scalar);
}

Vec.rotate = function (a, b, angle) {
    // rotate a about b
    let parallel = Vec.proj(a, b);
    let orthogonal = Vec.subtract(a, parallel);
    let w = Vec.cross(b, orthogonal);
    let norm_ortho = Math.sqrt(Vec.normsq(orthogonal));
    let x1 = Math.cos(angle) / norm_ortho;
    let x2 = Math.sin(angle) / Math.sqrt(Vec.normsq(w));
    let rot_ortho = Vec.scale(
        Vec.add(Vec.scale(orthogonal, x1), Vec.scale(w, x2)),
        norm_ortho
    );
    return Vec.add(rot_ortho, parallel);
}
