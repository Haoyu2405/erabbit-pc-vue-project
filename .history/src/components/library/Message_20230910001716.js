// 提供一个能够显示xtx-message组件的函数
// 这个函数能够导入使用，也可以挂载在vue实例上
// import Message from './Message.js' 使用 Message({type: 'success', message: '成功提示'})
// this.$message({type: 'success', message: '成功提示'})

import { createVNode, render } from 'vue'
import XtxMessage from './xtx-message.vue'

// Dom容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-container')
document.body.appendChild(div)

// 定时器标识
const timer = null

// 1.导入消息提示组件
// 2.将消息提示组件编译为虚拟节点（dom节点）
// 3.准备一个装载虚拟节点的dom容器
// 4.将虚拟节点挂载到容器中
export default ({ type, text }) => {
  // 创建虚拟节点, createVNode(组件, 组件属性)
  const vnode = createVNode(XtxMessage, { type, text })
  // render(虚拟节点，dom容器)
  render(vnode, div)
  se
}
