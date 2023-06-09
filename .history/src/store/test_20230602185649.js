// // 创建一个全局的事件总线对象
// const eventBus = {
//   subscribers: {},
//   subscribe (event, callback) {
//     if (!this.subscribers[event]) {
//       this.subscribers[event] = []
//     }
//     this.subscribers[event].push(callback)
//   },
//   publish (event, data) {
//     const subscribers = this.subscribers[event]
//     if (subscribers) {
//       subscribers.forEach(callback => callback(data))
//     }
//   }
// }

// // 订阅者1
// const subscriber1 = data => {
//   console.log('订阅者1 收到消息:', data)
// }

// // 订阅者2
// const subscriber2 = data => {
//   console.log('订阅者2 收到消息:', data)
// }

// // 添加订阅者到事件总线中
// eventBus.subscribe('message', subscriber1)
// eventBus.subscribe('message', subscriber2)

// // 发布消息
// eventBus.publish('message', '你好，这是一条消息！')




// 创建一个全局的事件总线对象
const eventBus = {
  subscribers: {}, // 存储订阅者的对象，键是事件类型，值是订阅者数组
  subscribe (event, callback) {
    // 订阅事件的方法
    if (!this.subscribers[event]) {
      this.subscribers[event] = [] // 如果当前事件类型 event 在订阅者对象 subscribers 中不存在，那么就将其初始化为空数组 []。
    }
    this.subscribers[event].push(callback) // 将订阅者函数添加到对应事件类型的数组中
  },
  publish (event, data) {
    // 发布事件的方法, data是事件的数据，也就是要传递给订阅者的消息内容。
    const subscribers = this.subscribers[event]
    if (subscribers) {
      subscribers.forEach(callback => callback(data)) // 遍历订阅者数组，调用每个订阅者的回调函数
    }
  }
}

// 订阅者1
const subscriber1 = data => {
  console.log('订阅者1 收到消息:', data)
}

// 订阅者2
const subscriber2 = data => {
  console.log('订阅者2 收到消息:', data)
}

// 添加订阅者到事件总线中
eventBus.subscribe('message', subscriber1) // 订阅 'message' 事件，指定回调函数为 subscriber1
eventBus.subscribe('message', subscriber2) // 订阅 'message' 事件，指定回调函数为 subscriber2

// 发布消息
eventBus.publish('message', '你好，这是一条消息！') // 发布 'message' 事件，传递消息内容为 '你好，这是一条消息！'
