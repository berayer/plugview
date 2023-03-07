import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

interface Result<T = any> {
  code: number
  msg: string
  data: T
}

const request = axios.create({
  baseURL: '/v2',
  timeout: 5000
})

/**
 * 响应拦截器,包装返回数据,统一错误处理
 */
request.interceptors.response.use(
  (res) => {
    // 200 响应直接返回成功结果
    if (res.data && res.data.code == 200) {
      return res.data
    }
    // 其他响应码,显示错误信息, 返回错误
    if (res.data) {
      window.$notification.error({
        title: res.data.msg,
        content: res.data.data,
        duration: 2000
      })
      return Promise.reject(res.data)
    }
    return Promise.reject(res)
  },
  (err) => {
    httpErrorStatusHandle(err)
    return Promise.reject(err)
  }
)

function http(config: AxiosRequestConfig) {
  return request<any, Result>(config)
}

/**
 * 处理异常
 * @param {*} error
 */
function httpErrorStatusHandle(error: any) {
  let message = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = '接口重定向了！'
        break
      case 400:
        message = '参数不正确！'
        break
      case 401:
        message = '您未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        message = '您没有权限操作！'
        break
      case 404:
        message = '请求地址出错:' + error.response.config.url
        break
      case 408:
        message = '请求超时！'
        break
      case 409:
        message = '系统已存在相同数据！'
        break
      case 500:
        message = '服务器内部错误！'
        break
      case 501:
        message = '服务未实现！'
        break
      case 502:
        message = '网关错误！'
        break
      case 503:
        message = '服务不可用！'
        break
      case 504:
        message = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        message = 'HTTP版本不受支持！'
        break
      default:
        message = '异常问题，请联系网站管理员！'
        break
    }
  }
  if (error.message.includes('timeout')) {
    message = '网络请求超时！'
  }
  if (error.message.includes('Network')) {
    message = window.navigator.onLine ? '服务端异常！' : '您断网了！'
  }

  window.$message.error(message)
}

export default http
