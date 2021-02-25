// 导入axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/'
// 请求响应超时时间
axios.defaults.timeout = 5000

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     token && (config.headers.Authorization = token)
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   })

// 响应拦截器
// axios.interceptors.response.use(response => {
//   if (response.status === 200) {
//     if (response.data.code === 511) {
//       // 未授权调取授权接口
//     } else if (response.data.code === 510) {
//       // 未登录跳转登录页
//     } else {
//       return Promise.resolve(response)
//     }
//   } else {
//     return Promise.reject(response)
//   }
// }, error => {
//   // 我们可以在这里对异常状态作统一处理
//   if (error.response.status) {
//     // 处理请求失败的情况
//     // 对不同返回码对相应处理
//     return Promise.reject(error.response)
//   }
// })

// 封装请求方式
export default {
  get: function (url, params) {
    return new Promise(function (resolve, reject) {
      axios.get(url, {
        params: params
      })
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (url, params) {
    return new Promise(function (resolve, reject) {
      axios.post(url, params)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
