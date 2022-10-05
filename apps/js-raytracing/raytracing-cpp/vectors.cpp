#include "vectors.h"
#include <iostream>
#include <math.h>

double dot(std::array<double,3> a, std::array<double,3> b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

std::array<double,3> cross(std::array<double,3> a, std::array<double,3> b) {
    return std::array<double,3> {
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    };
}

std::array<double,3> scale(std::array<double,3> a, double c) {
    return std::array<double,3> {a[0] * c, a[1] * c, a[2] * c};
}

double normsq(std::array<double,3> a) {
    return dot(a, a);
}

std::array<double,3> getUnitVec(std::array<double,3> a) {
    return scale(a, pow(normsq(a), -0.5));
}

std::array<double,3> addc(std::array<double,3> a, double c) {
    return std::array<double,3> {a[0] + c, a[1] + c, a[2] + c};
}

std::array<double,3> add(std::array<double,3> a, std::array<double,3> b) {
    return std::array<double,3> {a[0] + b[0], a[1] + b[1], a[2] + b[2]};
}

std::array<double,3> add3(std::array<double,3> a, std::array<double,3> b, std::array<double,3> c) {
    return std::array<double,3> {
        a[0] + b[0] + c[0],
        a[1] + b[1] + c[1],
        a[2] + b[2] + c[2]
    };
}

std::array<double,3> subtract(std::array<double,3> a, std::array<double,3> b) {
    return std::array<double,3> {a[0] - b[0], a[1] - b[1], a[2] - b[2]};
}

std::array<double,3> reflect(std::array<double,3> a, std::array<double,3> normal) {
    std::array<double,3> d = scale(normal, 2 * dot(a, normal));
    return subtract(a, d);
}

std::array<double,3> proj(std::array<double,3> a, std::array<double,3> b) {
    double scalar = dot(a, b) / normsq(b);
    return scale(b, scalar);
}

std::array<double,3> rotate(std::array<double,3> a, std::array<double,3> b, double angle) {
    std::array<double,3> parallel = proj(a, b);
    std::array<double,3> orthogonal = subtract(a, parallel);
    std::array<double,3> w = cross(b, orthogonal);
    double norm_ortho = sqrt(normsq(orthogonal));
    double x1 = cos(angle) / norm_ortho;
    double x2 = sin(angle) / sqrt(normsq(w));
    std::array<double,3> rot_ortho = scale(
        add(scale(orthogonal, x1), scale(w, x2)),
        norm_ortho
    );
    return add(rot_ortho, parallel);
}

// int main() {
//     std::array<double, 3> a = {1, 2, 3};
//     std::array<double, 3> b = rotate(a, J, PI / 4);
//     std::cout << b[0] << b[1] << b[2] << '\n';
// }
