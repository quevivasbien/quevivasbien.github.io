#ifndef VECTORS_H_INCLUDED
#define VECTORS_H_INCLUDED

#ifndef ARRAY
#define ARRAY
#include <array>
#endif

// define helpful constant vectors
const std::array<double,3> I = {1, 0, 0};
const std::array<double,3> J = {0, 1, 0};
const std::array<double,3> K = {0, 0, 1};

const std::array<double,3> WHITE = {255, 255, 255};
const std::array<double,3> ZERO = {0, 0, 0};

// define pi
const double PI = 3.14159265358979323846;

// now for functions
double dot(std::array<double,3> a, std::array<double,3> b);
std::array<double,3> cross(std::array<double,3> a, std::array<double,3> b);
std::array<double,3> scale(std::array<double,3> a, double c);
double normsq(std::array<double,3> a);
std::array<double,3> getUnitVec(std::array<double,3> a);
std::array<double,3> addc(std::array<double,3> a, double c);
std::array<double,3> add(std::array<double,3> a, std::array<double,3> b);
std::array<double,3> add3(std::array<double,3> a, std::array<double,3> b, std::array<double,3> c);
std::array<double,3> subtract(std::array<double,3> a, std::array<double,3> b);
std::array<double,3> reflect(std::array<double,3> a, std::array<double,3> normal);
std::array<double,3> proj(std::array<double,3> a, std::array<double,3> b);
std::array<double,3> rotate(std::array<double,3> a, std::array<double,3> b, double angle);

#endif
