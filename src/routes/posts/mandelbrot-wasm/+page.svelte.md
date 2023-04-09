<!-- DATE: 2023-03 -->
<!-- TAGS: code, math -->
# Yet another Mandelbrot explorer

I've made quite a few attempts at creating a visualizer for the Mandelbrot set. This has become something of a go-to project for me when learning a new programming language and has been a not-insignificant factor in motivating me to learn some new technologies.

I have made a few iterations on explorers making use of WebAssembly, starting with a dreadfully slow attempt using C++'s emscripten compiler, and culminating in a Rust-based version I made a few months back. Most of these iterations suffered from rendering artifacts due to off-by-one errors in delegating calculations to web workers, collecting the results, and stitching them together on the HTML canvas. I finally got around to fixing those artifacts and now have a version of the Mandelbrot explorer that I feel quite happy with (though, of course, I already have in mind more improvements).

<!-- ENDPREVIEW -->

I ended up using plain JavaScript (no TypeScript and no web framework) for this, just because importing the wasm inside workers was giving me headaches otherwise. (I'm probably missing something, but as far as I can tell it is currently impossible to import scripts within a web worker in TypeScript. This seems bizarre to me, but it is generally in line with JS's general lack of support for multiprocessing features.)

You can check out the result [here](https://quevivasbien.github.io/mandelbrot-wasm/).
