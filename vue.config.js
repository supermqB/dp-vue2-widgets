const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://172.16.29.4:19200',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
