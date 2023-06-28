// 扩展vue原有的功能：全局组件，全局指令，自定义指令，挂载原型方法，注意：vue3没有过滤器
// vue2插件写法：导出一个对象，对象中有一个install方法，install方法有两个参数，第一个参数是vue对象，第二个参数是可选的配置对象
// vue3插件写法：导出一个对象，对象中有一个install方法，install方法有两个参数，第一个参数是app对象，第二个参数是可选的配置对象

import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import { define } from 'core-js/core/object'

export default {
  install (app, options) {
    // 全局组件
    // 在app上进行扩展，app提供component directive mount等方法
    // 如果要挂载原型方法，可以使用app.config.globalProperties
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    // 定义指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = app => {
  // 图片懒加载指令 v-lazy
  // 原理：监听图片是否进入可视区，如果进入可视区，就将img的src属性设置为真实的图片地址
  app.directive('lazy', {)
}
