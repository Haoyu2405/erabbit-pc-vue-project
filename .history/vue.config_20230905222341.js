const path = require('path')
const openCodeServe = require('@vivo/vue-dev-code-link/server')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules[
      {
        test: /.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10, // 小于10kb的图片转化为base64
              esModule: false // 这里，置为false即可
            }
          }
        ]
      }
    ]
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
    before: openCodeServe.before,
    proxy: {
      '/api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  if (!isProd) { // 本地开发环境
  config.module
    .rule('vue')
    .test(/\.vue/)
    .use('@vivo/vue-dev-code-link/add-location-loader')
    .loader('@vivo/vue-dev-code-link/add-location-loader')
    .end()
}
})
