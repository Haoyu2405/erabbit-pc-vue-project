// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的一些配置，baseURL timeout
  baseURL,
  timeout: 5000,
  withCredentials: true // 添加跨域请求的配置
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

// res => res.data 取出data数据，将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(
  res => res.data,
  err => {
    // 401状态码(unauthorized)，进入该函数
    // If  remove the `err.response` check, it would result in an error because you would be trying to access the status property of undefined.
    // This can cause a runtime error and potentially break the code execution.
    if (err.response && err.response.status === 401) {
      // 1.清空无效的用户信息
      // 2.跳转到登录页
      // 3.跳转需要传参(当前路由地址)给登录页码
      store.commit('user/setUser', {})
      // 当前的路由地址
      // 组件里头: `/user?a=10` $route.path === /user $route.fullPath === /user?a=10
      // js模块中: router.currentRoute.value.fullPath 就是当前路由地址 router.currentRoute 是ref响应对象，所以用value取值
      // encodeURIComponent转换uri编码，防止解析地址出问题
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)

      const redirectUrl = '/login?redirectUrl=' + fullPath

      router.push(redirectUrl)
    }
    return Promise.reject(err)
  }
)

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求:请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    // 1.如果是get请求 需要使用params来传递submitData ?a=10&c=10
    // 2.如果不是get请求 需要使用data来传递submitData 请求体传参
    // []设置一个动态的key，写js表达式，js的表达式的结果当作key
    // method参数：get,Get,GET 转换成小写再做判断
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
