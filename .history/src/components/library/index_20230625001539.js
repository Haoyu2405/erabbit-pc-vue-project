// 扩展vue原有的功能：全局组件，全局指令，自定义指令，挂载原型方法，注意：vue3没有过滤器
// vue2插件写法：导出一个对象，对象中有一个install方法，install方法有两个参数，第一个参数是vue对象，第二个参数是可选的配置对象
// vue3插件写法：导出一个对象，对象中有一个install方法，install方法有两个参数，第一个参数是app对象，第二个参数是可选的配置对象

import XtxSkeleton from "./xtx-skeleton.vue";

export default {
  install(app, options) {
    // 全局组件
    // 在apps
    app.component(XtxSkeleton.name, XtxSkeleton);
  }