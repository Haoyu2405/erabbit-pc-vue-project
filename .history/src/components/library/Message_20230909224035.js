// 提供一个能够显示xtx-message组件的函数
// 这个函数能够导入使用，也可以挂载在vue实例上
// import Message from './Message.js' 使用 Message({type: 'success', message: '成功提示'})
// this.$message({type: 'success', message: '成功提示'})

import { createVNode } from "vue";
import XtxMessage from "./xtx-message.vue";

// Dom容器
