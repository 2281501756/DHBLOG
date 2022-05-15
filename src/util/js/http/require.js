import axios from 'axios'
import NProgress from 'nprogress'


export class httpRequireClass {
  constructor(baseURL) {
    this.baseURL = baseURL
    this.instance =  axios.create({
      baseURL: baseURL,
      timeout: 5000
    })
    this.initInterceptors()
  }
  initInterceptors() {
    this.instance.interceptors.request.use(
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
    this.instance.interceptors.response.use(
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
  }
}
