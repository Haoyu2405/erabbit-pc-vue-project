const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions:{
    'style-resources-loader':{
      preProcessor:'less',
      // 使用绝对路径，用path.join来拼接完整路径
      patterns:[
        path.join(__dirname,'./src')
      ]
    }
  }
})
