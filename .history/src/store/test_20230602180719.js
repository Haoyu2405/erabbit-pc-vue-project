// 创建一个全局的事件总线对象
const eventBus = {
  subscribers: {},
  subscribe (event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []
    }
    this.subscribers[event].push(callback)
  },
  publish (event, data) {
    const subscribers = this.subscribers[event]
    if (subscribers) {
      subscribers.forEach(callback => callback(data))
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
eventBus.subscribe('message', subscriber1)
eventBus.subscribe('message', subscriber2)

// 发布消息
eventBus.publish('message', '你好，这是一条消息！')
