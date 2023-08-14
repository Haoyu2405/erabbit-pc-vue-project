const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 'C:\\Users\\hy\\Desktop\\erabbit-pc-vue-project\\src\\assets\\styles\\variables.less',
        // 'C:\\Users\\hy\\Desktop\\erabbit-pc-vue-project\\src\\assets\\styles\\mixins.less'
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  // 配置10kb下的图片打包成base64的格式
  chainWebpack: config => {
  config.module
    .rule('images')
    .use('url-loader')
    .loader('url-loader')
    .tap(options => {
      // 修改options.limit，将小于10kb的图片打包成base64格式
      options.limit = 10240 // 10kb的字节数
      return options
    })
},

  // 通过反向代理解决开发时前端跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
