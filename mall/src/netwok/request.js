import axios from 'axios'
// 方法1
export function request(config) {

    //1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http//123.207.32.32:8000',
        timeout: 5000
    })

    // 2.axios的拦截器
    //拦截请求   axios.interceptors.request全局拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res
    },err=>{
        console.log(err)
    })
    // 发送真正的网络请求
    return instance(config)
}