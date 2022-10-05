#include "raytracing.h"
#include "vectors.h"
#include <math.h>
#include <cstdint>
#include <emscripten.h>
#include <emscripten/bind.h>
#include <iostream>

using namespace emscripten;

// void printVec(std::array<double,3> vec) {
//     std::cout << vec[0] << ' ' << vec[1] << ' ' << vec[2] << std::endl;
// }

Scene::Scene(
    unsigned int width_, unsigned int height_,
    double cam_pos_x, double cam_pos_y, double cam_pos_z,
    double cam_for_x, double cam_for_y, double cam_for_z,
    double cam_up_x, double cam_up_y, double cam_up_z,
    double cam_rig_x, double cam_rig_y, double cam_rig_z,
    double fov
) {
    height = height_;
    width = width_;
    editCamera(cam_pos_x, cam_pos_y, cam_pos_z,
               cam_for_x, cam_for_y, cam_for_z,
               cam_up_x, cam_up_y, cam_up_z,
               cam_rig_x, cam_rig_y, cam_rig_z);
    half_width = tan(fov);
}

void Scene::editCamera(
    double cam_pos_x, double cam_pos_y, double cam_pos_z,
    double cam_for_x, double cam_for_y, double cam_for_z,
    double cam_up_x, double cam_up_y, double cam_up_z,
    double cam_rig_x, double cam_rig_y, double cam_rig_z
) {
    camera.position = std::array<double,3> {cam_pos_x, cam_pos_y, cam_pos_z};
    camera.forward = std::array<double,3> {cam_for_x, cam_for_y, cam_for_z};
    camera.up = std::array<double,3> {cam_up_x, cam_up_y, cam_up_z};
    camera.right = std::array<double,3> {cam_rig_x, cam_rig_y, cam_rig_z};
};

void Scene::addObject(double pos_x, double pos_y, double pos_z,
                      double col_x, double col_y, double col_z,
                      double specular, double lambert, double ambient,
                      double radius) {
    Object new_object{
        std::array<double,3> {pos_x, pos_y, pos_z},
        std::array<double,3> {col_x, col_y, col_z},
        specular, lambert, ambient, radius
    };
    std::array<double,3> vec = new_object.position;
    objects.push_back(new_object);
}

void Scene::editObject(unsigned int idx,
                       double pos_x, double pos_y, double pos_z) {
    objects[idx].position = std::array<double,3> {pos_x, pos_y, pos_z};
}

void Scene::addLight(double pos_x, double pos_y, double pos_z, double intensity) {
    // pos_x = -30;
    // pos_y = -10;
    // pos_z = 20;
    // intensity = 1.0;
    double threshold = pow(-log(HALO_THRESHOLD / intensity) / HALO_DROPOFF, 2);
    Light new_light{
        std::array<double,3> {pos_x, pos_y, pos_z},
        intensity,
        threshold
    };
    std::array<double,3> vec = new_light.position;
    lights.push_back(new_light);
}

std::array<double,3> Scene::getNormal(int obj_idx, std::array<double,3> position) {
    return getUnitVec(subtract(position, objects[obj_idx].position));
}

double Scene::objectIntersection(int obj_idx, Ray ray) {
    if (obj_idx == ray.origin_index) {return -1;}
    std::array<double,3> eye_to_center = subtract(objects[obj_idx].position, ray.position);
    double scalar_prod = dot(eye_to_center, ray.direction);
    if (scalar_prod < 0) {return -1;}
    double rsq = normsq(eye_to_center) - scalar_prod * scalar_prod;
    double Rsq = objects[obj_idx].radius * objects[obj_idx].radius;
    if (rsq > Rsq) {return -1;}
    return scalar_prod - sqrt(Rsq - rsq);
}

DistObj Scene::intersectWithScene(Ray ray) {
    DistObj closest{};
    for (int i = 0; i < objects.size(); i++) {
        double distance = objectIntersection(i, ray);
        if ((distance > 0) && (distance < closest.distance)) {
            closest.distance = distance;
            closest.index = i;
        }
    }
    return closest;
}

bool Scene::isLightVisible(std::array<double,3> position,
                           std::array<double,3> light_position) {
    Ray ray{
        position, getUnitVec(subtract(position, light_position))
    };
    DistObj intersection = intersectWithScene(ray);
    return (intersection.distance > LIGHT_TOL);
}

std::array<double,3> Scene::checkForLightSource(Ray ray) {
    std::array<double,3> out = ZERO;
    for (int i = 0; i < lights.size(); i ++ ) {
        std::array<double,3> to_light = subtract(lights[i].position, ray.position);
        double scalar_prod = dot(to_light, ray.direction);
        if (scalar_prod < 0) {continue;}
        double distancesq = normsq(to_light) - scalar_prod * scalar_prod;
        if (distancesq > lights[i].threshold) {continue;}
        else {
            double intensity = lights[i].intensity * exp(-HALO_DROPOFF * sqrt(distancesq));
            out = add(out, scale(WHITE, intensity));
        }
    }
    return out;
}

std::array<double,3> Scene::interactWithSurface(
    Ray ray, int obj_idx,
    std::array<double,3> position, std::array<double,3> normal,
    unsigned int depth
) {
    Object object = objects[obj_idx];
    std::array<double,3> object_color = object.color;
    double lambert_shading = 0;
    if (object.lambert > 0) {
        for (int i = 0; i < lights.size(); i++) {
            if (!isLightVisible(position, lights[i].position)) continue;
            double contribution = lights[i].intensity * dot(
                getUnitVec(subtract(lights[i].position, position)),
                normal
            );
            if (contribution > 0) {
                lambert_shading += contribution;
            }
        }
        lambert_shading = (lambert_shading > 1) ? 1 : lambert_shading;
    }
    if (object.specular > 0) {
        Ray reflected_ray{
            position, reflect(ray.direction, normal)
        };
        std::array<double,3> reflected_color = trace(reflected_ray, depth+1);
        return add3(
            scale(reflected_color, object.specular),
            scale(object_color, lambert_shading * object.lambert),
            scale(object_color, object.ambient)
        );
    }
    else {
        return add(
            scale(object_color, lambert_shading * object.lambert),
            scale(object_color, object.ambient)
        );
    }

}

std::array<double,3> Scene::trace(Ray ray, unsigned int depth) {
    if (depth > MAX_DEPTH) {return ZERO;}
    DistObj intersection = intersectWithScene(ray);
    if (intersection.distance == std::numeric_limits<double>::infinity()) {
        return checkForLightSource(ray);
    }
    std::array<double,3> position = add(ray.position,
                                        scale(ray.direction, intersection.distance));
    return interactWithSurface(
        ray,
        intersection.index,
        position,
        getNormal(intersection.index, position),
        depth
    );
}

uint8_t convertToUint8(double x) {
    if (x > 255) {
        return 255;
    }
    else if (x < 0) {
        return 0;
    }
    else {
        return static_cast<uint8_t>(x);
    }
}

unsigned long int Scene::render() {
    double hw_ratio = static_cast<double>(height) / width;
    double half_height = half_width * hw_ratio;
    double camera_width = half_width * 2;
    double camera_height = half_height * 2;
    double pixelwidth = camera_width / (width - 1);
    double pixelheight = camera_height / (height - 1);
    int idx;
    std::array<double,3> color;
    uint8_t data [width * height * 4];
    Ray ray{};
    ray.position = camera.position;
    for (int x = 0; x < width; x++) {
        for (int y = 0; y < height; y++) {
            std::array<double,3> x_component = scale(camera.right, x * pixelwidth - half_width);
            std::array<double,3> y_component = scale(camera.up, y * pixelheight - half_height);
            ray.direction = getUnitVec(add3(camera.forward, x_component, y_component));
            color = trace(ray, 0);
            idx = (x + y * width) * 4;
            data[idx] = convertToUint8(color[0]);
            data[idx+1] = convertToUint8(color[1]);
            data[idx+2] = convertToUint8(color[2]);
            // if (color != ZERO) {
            //     std::cout << data[idx+0] << ' '
            //                 << data[idx+1] << ' '
            //                 << data[idx+2] << std::endl;
            // }
            data[idx+3] = 255;
        }
    }
    // ick but nothing else seems to work
    return reinterpret_cast<unsigned long int>(&data[0]);
}


EMSCRIPTEN_BINDINGS(scene_class) {
    class_<Scene>("Scene")
        .constructor<
            unsigned int, unsigned int,
            double, double, double,
            double, double, double,
            double, double, double,
            double, double, double,
            double
        >()
        .function("editCamera", &Scene::editCamera)
        .function("addObject", &Scene::addObject)
        .function("editObject", &Scene::editObject)
        .function("addLight", &Scene::addLight)
        .function("render", &Scene::render)
        ;
}

int main() {
    EM_ASM(start(););
}

// int main() {
//     Scene scene(
//         640, 480,
//         0, 0, 0,
//         0, 0, -1,
//         0, 1, 0,
//         1, 0, 0,
//         PI / 4
//     );
//     scene.addLight(-30, -10, 20, 1.0);
//     scene.addObject(
//         0, 0, -15,
//         20, 100, 120,
//         0.8, 0.2, 0.1, 2
//     );
//     std::cout << scene.render() << '\n';
//     return 0;
// }
