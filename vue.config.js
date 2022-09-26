const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
const path = require('path')

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: process.env.VUE_APP_REAL_ROUTER_BASE,
  productionSourceMap: process.env.NODE_ENV === 'development',
  configureWebpack: {
    // target: 'web',
    // devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '@img': path.resolve('src/assets/images')
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd'
      // jsonpFunction: `webpackJsonp_${name}`
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/css/mixin.scss";`
      }
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    },
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
