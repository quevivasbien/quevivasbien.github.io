let wasm_bindgen;
(function() {
    const __exports = {};
    let wasm;

    const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

    cachedTextDecoder.decode();

    let cachedUint8Memory0 = new Uint8Array();

    function getUint8Memory0() {
        if (cachedUint8Memory0.byteLength === 0) {
            cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

    function _assertClass(instance, klass) {
        if (!(instance instanceof klass)) {
            throw new Error(`expected instance of ${klass.name}`);
        }
        return instance.ptr;
    }

    let cachedInt32Memory0 = new Int32Array();

    function getInt32Memory0() {
        if (cachedInt32Memory0.byteLength === 0) {
            cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachedInt32Memory0;
    }

    let cachedUint8ClampedMemory0 = new Uint8ClampedArray();

    function getUint8ClampedMemory0() {
        if (cachedUint8ClampedMemory0.byteLength === 0) {
            cachedUint8ClampedMemory0 = new Uint8ClampedArray(wasm.memory.buffer);
        }
        return cachedUint8ClampedMemory0;
    }

    function getClampedArrayU8FromWasm0(ptr, len) {
        return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);
    }
    /**
    * @param {number} width_
    * @param {number} height_
    * @param {number} x0
    * @param {number} y0
    * @param {number} x1
    * @param {number} y1
    * @param {Colors} colors
    * @returns {Uint8ClampedArray}
    */
    __exports.compute_grid = function(width_, height_, x0, y0, x1, y1, colors) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(colors, Colors);
            wasm.compute_grid(retptr, width_, height_, x0, y0, x1, y1, colors.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getClampedArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };

    /**
    */
    class Colors {

        static __wrap(ptr) {
            const obj = Object.create(Colors.prototype);
            obj.ptr = ptr;

            return obj;
        }

        __destroy_into_raw() {
            const ptr = this.ptr;
            this.ptr = 0;

            return ptr;
        }

        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_colors_free(ptr);
        }
        /**
        * @returns {Colors}
        */
        static default() {
            const ret = wasm.colors_default();
            return Colors.__wrap(ret);
        }
    }
    __exports.Colors = Colors;

    async function load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    function getImports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };

        return imports;
    }

    function initMemory(imports, maybe_memory) {

    }

    function finalizeInit(instance, module) {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        cachedInt32Memory0 = new Int32Array();
        cachedUint8Memory0 = new Uint8Array();
        cachedUint8ClampedMemory0 = new Uint8ClampedArray();


        return wasm;
    }

    function initSync(module) {
        const imports = getImports();

        initMemory(imports);

        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }

        const instance = new WebAssembly.Instance(module, imports);

        return finalizeInit(instance, module);
    }

    async function init(input) {
        if (typeof input === 'undefined') {
            let src;
            if (typeof document === 'undefined') {
                src = location.href;
            } else {
                src = document.currentScript.src;
            }
            input = src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = getImports();

        if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
            input = fetch(input);
        }

        initMemory(imports);

        const { instance, module } = await load(await input, imports);

        return finalizeInit(instance, module);
    }

    wasm_bindgen = Object.assign(init, { initSync }, __exports);

})();
