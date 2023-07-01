// 扩展vue原有的功能：全局组件，全局指令，自定义指令，挂载原型方法，注意：vue3没有过滤器
// vue2插件写法：导出一个对象，对象中有一个install方法，install方法有两个参数，第一个参数是vue对象，第二个参数是可选的配置对象
// vue3插件写法：导出一个对象，对象中有一个install方法，install方法有两个参数，第一个参数是app对象，第二个参数是可选的配置对象

import defaultImg from '@/assets/images/200.png'
// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'
// 使用require.context()方法，自动导入所有的组件
// require.context()方法有三个参数：要搜索的文件夹目录，是否还应该搜索它的子目录，以及一个匹配文件的正则表达式
// require.context()方法返回一个函数，这个函数有3个属性：resolve, keys, id
// keys属性是一个函数，返回匹配成功模块的名字组成的数组
const importFn = require.context('./', false, /\.vue$/)

export default {
  install (app, options) {
    // 全局组件
    // 在app上进行扩展，app提供component directive mount等方法
    // 如果要挂载原型方法，可以使用app.config.globalProperties
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)
    // 定义指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = app => {
  // 图片懒加载指令 v-lazy
  // 原理：监听图片是否进入可视区，如果进入可视区，就将img的src属性设置为真实的图片地址
  app.directive('lazy', {
    // vue2.0 监听使用指令的dom是否创建好，钩子函数：inserted
    // vue3.0 监听使用指令的dom是否创建好和组件的一样，钩子函数：mounted
    mounted (el, binding) {
      // 2.创建一个观察者，观察el是否进入可视区
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 停止观察
            observer.unobserve(el)
            // 3. 处理加载失败的图片 error 图片加载失败的事件 load 图片加载成功的事件
            el.onerror = () => {
              el.src = defaultImg
            }
            // 4.将img的src属性设置为真实的图片地址 binding.value就是真实的图片地址
            el.src = binding.value
          }
        },
        {
          threshold: 0
        }
      )
      // 开始观察
      observer.observe(el)
    }
  })
}
