emcc -o wasm.js mandelbrot.cpp --shell-file ../mandelbrot.html -s WASM=1 -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']" -s "EXPORTED_FUNCTIONS=['_malloc', '_free', '_main']"
