#include <cstdint>
#include <complex>
#include <vector>
#include <thread>
#include <emscripten/emscripten.h>

const int MAXITER = 1000;
const double BREAK_LIM = 1e-5;
const int NPROC = std::thread::hardware_concurrency();


const int GRAY[3] = {178, 182, 183};
const int TEAL[3] = {84, 147, 146};
const int TAN[3] = {195, 155, 114};
const int ORANGE[3] = {212, 135, 40};
const int RED[3] = {190, 67, 66};

double mandel_iter(double real, double imag) {
    std::complex<double> c (real, imag);
    std::complex<double> z = c;
    int i  = MAXITER;
    double absz;
    while (i > 0) {
        absz = std::abs(z);
        if (absz > 2) {
            break;
        }
        z = std::pow(z, 2) + c;
        if (absz < BREAK_LIM) {
            i = 0;
        }
        else {
            i--;
        }
    }
    if (i == 0) {
        return -std::pow(((absz-2) / 2), 4);
    }
    else {
        return static_cast<double>(i) / MAXITER;
    }
}

int get_color(double x, int channel) {
    double y;
    int out;
    if (x < 0) {
        y = -x;
        out = y * RED[channel] + (1-y) * ORANGE[channel];
    }
    else if (x < 0.25) {
        y = x * 4;
        out = y * TAN[channel] + (1-y) * ORANGE[channel];
    }
    else if (x < 0.5) {
        y = (x - 0.25) * 4;
        out = y * TEAL[channel] + (1-y) * TAN[channel];
    }
    else {
        y = x * 2 - 1;
        out = y * GRAY[channel] + (1-y) * TEAL[channel];
    }
    return out;
}


extern "C" {
    EMSCRIPTEN_KEEPALIVE
    uint8_t* draw_mandelbrot(int pixelwidth, int pixelheight,
                             double xstart, double xstop,
                             double ystart, double ystop) {
        // Set up x and y ranges
        double width = xstop - xstart;
        double height = ystop - ystart;
        double wstep = width / (pixelwidth-1);
        std::vector<double> x(pixelwidth);
        x[0] = xstart;
        for (int i = 1; i < pixelwidth; i++) {
            x[i] = x[i-1] + wstep;
        }
        double hstep = height / (pixelheight-1);
        std::vector<double> y(pixelheight);
        y[0] = ystart;
        for (int i = 1; i < pixelheight; i++) {
            y[i] = y[i-1] + hstep;
        }
        // create (flat) output
        int length = pixelwidth * pixelheight;
        int idx_per_thread = length / NPROC;
        std::vector<double> grid(length);
        for (int i = 0; i < length; i++) {
            int col = i % pixelwidth;
            int row = i / pixelwidth;
            grid[i] = mandel_iter(x[col], y[row]);
        }
        // calculate img values
        uint8_t img[length * 4];
        // loop over grid positions
        int k = 0;
        for (int i = 0; i < length; i++) {
            // assign colors
            img[k] = get_color(grid[i], 0);
            img[k+1] = get_color(grid[i], 1);
            img[k+2] = get_color(grid[i], 2);
            // set alpha channel to visible
            img[k+3] = 255;
            k += 4;
        }
        // return pointer to the image
        auto arrayPtr = &img[0];
        return arrayPtr;
    }
}
