import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式的库


createApp(App).use(store).use(router).mount('#app')
