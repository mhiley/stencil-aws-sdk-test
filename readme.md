This is the Stencil.js "app" starter template, with aws-sdk installed - [see the commit for details](https://github.com/mhiley/stencil-aws-sdk-test/commit/d62248b4f0c3d45c3188f79ba5fb32c8692c944a).

The stencil build still gives the following error:

```
[ ERROR ]  Node Polyfills Required
           For the import "buffer" to be bundled from node_modules/aws-sdk/lib/browserMd5.js, ensure the
           "rollup-plugin-node-polyfills" plugin is installed and added to the stencil config plugins. Please see the
           bundling docs for more information. Further information: https://stenciljs.com/docs/module-bundling
```

despite having already followed the instructions (install "rollup-plugin-node-polyfills" and add to `plugins` in `stencil.config.ts`) suggested by the error message.
