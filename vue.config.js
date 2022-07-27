const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  // transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === 'development',
  configureWebpack: {
    // target: 'web',
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '@img': path.resolve('src/assets/images')
      }
    }
  },
  devServer: {
    // 代理服务器配置
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_DEV_PROXY_HOST,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
