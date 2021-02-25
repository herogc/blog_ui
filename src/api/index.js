// 导入封装好的网络请求类工具
import http from './http'

// 路径参数封装
// export const  Api= p => post('/api/'+ p);
// 多参数封装
// export const  Api=（ p，q ）=> post('/api/'+ p+“/"+q);
export const isLogin = e => http.post('/login', e) // 登录
