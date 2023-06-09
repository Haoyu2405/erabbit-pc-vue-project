// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'

// 导出基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的一些配置，baseURL timeout
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    // 拦截业务逻辑
    // 进行请求配置地修改
    // 如果本地有token就在头部携带
    // 1.获取用户信息对象
    const { profile } = store.state.user // 解构写法 基本写法：const profile = store.state.user.profile
    // 2.判断是否有token
    if (profile.token) {
      // 3.设置token
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// res => res.data 
