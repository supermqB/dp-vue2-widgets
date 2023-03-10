const { defineConfig } = require('@vue/cli-service')

const apiBasePath =
  process.env.BASE_URL.replace(/\/$/, '') +
  (process.env.VUE_APP_BASE_API ?? '/api')

module.exports = defineConfig({
  publicPath: process.env.BASE_URL,
  devServer: {
    proxy: {
      [apiBasePath]: {
        changeOrigin: true,
        target: process.env.DEV_SERVER_PROXY_HOST,
        pathRewrite: {
          ['^' + apiBasePath]: ''
        }
      }
    }
  }
})
