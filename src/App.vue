<template>
  <div>
    Hello
  </div>
</template>

<script>
import * as cornerstone from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools";

export default {
  name: 'App',
  mounted() {
    window.cornerstone = cornerstone;

    /**
     * FIXME:
     * ERROR in ./node_modules/@icr/polyseg-wasm/dist/ICRPolySeg.wasm 1:0
     * Module parse failed: Unexpected character '' (1:0)
     * The module seem to be a WebAssembly module, but module is not flagged as WebAssembly module for webpack.
     * BREAKING CHANGE: Since webpack 5 WebAssembly is not enabled by default and flagged as experimental feature.
     */
    window.cornerstoneTools = cornerstoneTools;
  }
}
</script>

<style>
</style>
