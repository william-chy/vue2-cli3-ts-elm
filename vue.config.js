module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',

  outputDir: 'dist',

  assetsDir: 'static',

  // filenameHashing: true,

  // 生产环境 sourceMap
  productionSourceMap: false,

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,

    host: '0.0.0.0',

    port: 8080,

    https: false,

    // hotOnly: false,

    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws: false,
        changeOrigin: true,
        secure: false,
      },
      '/foo': {
        target: 'http://localhost:5000',
      },
    },

    // before: app => {},
  },
  // 构建时开启多进程处理 babel 编译
  // parallel: require('os').cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {},
};
