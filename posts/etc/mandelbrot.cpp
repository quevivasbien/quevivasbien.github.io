#include <cstdint>
#include <complex>
#include <vector>
#include <emscripten/emscripten.h>

const int MAXITER = 1000;
const double BREAK_LIM = 1e-10;

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
        std::complex<double> last_z = z;
        z = std::pow(z, 2) + c;
        if ((absz < BREAK_LIM) || ((std::abs(std::abs(z) - absz) / absz) < BREAK_LIM)) {
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

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    uint8_t* draw_mandelbrot(int pixelwidth, int pixelheight,
                             double xstart, double xstop, double ystart, double ystop) {
        // Set up grid
        double width = xstop - xstart;
        double height = ystop - ystart;
        double wstep = width / (pixelwidth-1);
        std::vector<double> x(pixelwidth);
        x[0] = xstart;
        for (int i = 1; i < pixelwidth; i++) {
            x[i] = x[i-1] + wstep;
        }
        double hstep {height / (pixelheight-1)};
        std::vector<double> y(pixelheight);
        y[0] = ystart;
        for (int i = 1; i < pixelheight; i++) {
            y[i] = y[i-1] + hstep;
        }
        std::vector<std::vector<double>> grid(pixelwidth, std::vector<double> (pixelheight));
        for (int row = 0; row < pixelheight; row++) {
            for (int col = 0; col < pixelwidth; col++) {
                grid[row][col] = mandel_iter(x[col], y[row]);
            }
        }
        // calculate img values
        uint8_t img[pixelwidth * pixelheight * 4];
        // loop over grid positions
        int k = 0;
        for (int i=0; i<pixelheight; i++) {
            for (int j=0; j<pixelwidth; j++) {
                if (grid[i][j] > 0) {
                    img[k] = 115;
                    img[k+1] = 191;
                    img[k+2] = 143;
                }
                else {
                    img[k] = 0;
                    img[k+1] = 0;
                    img[k+2] = 0;
                }
                // set alpha channel to visible
                img[k+3] = 255;
                k += 4;
            }
        }
        auto arrayPtr = &img[0];
        return arrayPtr;
    }
}


int main() {
    EM_ASM(draw());
    return 0;
}
