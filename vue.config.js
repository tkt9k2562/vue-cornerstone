const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    experiments: {
      // FIXME: I am not sure should I use `syncWebAssembly` or `asyncWebAssembly`
      // syncWebAssembly: true
      asyncWebAssembly: true,
    }
  },
})
