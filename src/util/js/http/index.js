import axios from 'axios'
import baseURL from './baseURL'
import NProgress from 'nprogress'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000
})

export function get(url, params) {
  return instance.get(url, {
    params
  })
}
export function post(url, data, params) {
  return instance.post(url, data, params)
}

instance.interceptors.request.use(
  (config) => {
    // 开启进度条
    NProgress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 关闭进度条
    NProgress.done()
    return response
  },
  (error) => {
    // 关闭进度条
    NProgress.done()
    return Promise.reject(error)
  }
)

export default instance
