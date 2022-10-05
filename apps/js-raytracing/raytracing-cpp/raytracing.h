#ifndef DEFINE_RAYTRACING_H
#define DEFINE_RAYTRACING_H

#ifndef ARRAY
#define ARRAY
#include <array>
#endif

#include <vector>
#include <limits>


const double LIGHT_TOL = -0.005;
const double HALO_DROPOFF = 1;
const double HALO_THRESHOLD = 0.01;
const unsigned int MAX_DEPTH = 3;



struct Camera {
    std::array<double,3> position;
    std::array<double,3> forward;
    std::array<double,3> up;
    std::array<double,3> right;
};

struct Light {
    std::array<double,3> position;
    double intensity;
    double threshold;
};

struct Object {
    std::array<double,3> position;
    std::array<double,3> color;
    double specular;
    double lambert;
    double ambient;
    double radius;
};

struct Ray {
    std::array<double,3> position;
    std::array<double,3> direction;
    int origin_index {-1};
};

struct DistObj {
    double distance {std::numeric_limits<double>::infinity()};
    int index {0};
};



class Scene {
public:
    Scene(
        // this is tedious since emscripten's variable passing sucks
        unsigned int width_, unsigned int height_,
        double cam_pos_x, double cam_pos_y, double cam_pos_z,
        double cam_for_x, double cam_for_y, double cam_for_z,
        double cam_up_x, double cam_up_y, double cam_up_z,
        double cam_rig_x, double cam_rig_y, double cam_rig_z,
        double fov
        // lights need to be added afterward
        // ... as do objects
    );
    void editCamera(
        double cam_pos_x, double cam_pos_y, double cam_pos_z,
        double cam_for_x, double cam_for_y, double cam_for_z,
        double cam_up_x, double cam_up_y, double cam_up_z,
        double cam_rig_x, double cam_rig_y, double cam_rig_z
    );
    void addObject(double pos_x, double pos_y, double pos_z,
                   double col_x, double col_y, double col_z,
                   double specular, double lambert, double ambient, double radius);
    void editObject(unsigned int idx, double pos_x, double pos_y, double pos_z);
    void addLight(double pos_x, double pos_y, double pos_z, double intensity);
    unsigned long int render();

private:
    unsigned int height;
    unsigned int width;
    double half_width;
    Camera camera;
    std::vector<Light> lights;
    std::vector<Object> objects;

    std::array<double,3> getNormal(int obj_idx, std::array<double,3> position);
    double objectIntersection(int obj_idx, Ray ray);
    DistObj intersectWithScene(Ray ray);
    bool isLightVisible(std::array<double,3> position, std::array<double,3> light_position);
    std::array<double,3> checkForLightSource(Ray ray);
    std::array<double,3> interactWithSurface(
        Ray ray, int obj_idx,
        std::array<double,3> position, std::array<double,3> normal,
        unsigned int depth
    );
    std::array<double,3> trace(Ray ray, unsigned int depth);
};

#endif
