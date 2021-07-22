em++ mandelbrot.cpp -O3 -o wasm.js -s WASM=1 -s BUILD_AS_WORKER=1 -s NO_EXIT_RUNTIME=1 -s "EXPORTED_FUNCTIONS=['_malloc', '_free', '_draw_mandelbrot']"
