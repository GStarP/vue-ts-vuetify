module.exports = {
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss"`
      }
    }
  },
  devServer: {
    port: 8085,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewrite:{
          '^/api': '/'
        }
      }
    }
  }
};
