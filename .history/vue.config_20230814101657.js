const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   chainWebpack: config => {
    config.module.rule('es5_js')
      .test(/\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', { modules: false }]
        ]
      }).end()
  },
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
