import axios from 'axios'
// 方法1
export function request(config){
 
        //1. 创建axios实例
        const instance=axios.create({
            baseURL:'http//123.207.32.32:8000',
            timeout:5000
        })

        // 2.axios的拦截器
        //拦截请求   axios.interceptors.request全局拦截
        // 操作
            // 比如aaa中的一些信息不符合服务器的要求
            // 比如每次发送网络请求，希望在界面中显示一个请求的图标
            // 比如某些网络请求（比如登录（token）），必须携带一些特殊信息
        instance.interceptors.request.use(aaa=>{
            console.log(aaa);
            return aaa
        },err=>{
            console.log(err)
        })
        // 响应拦截
        instance.interceptors.response.use(res=>{
            console.log(res);
            return res
        },err=>{
            console.log(err)
        } )
        // 3.发送真正的网络请求
     return instance(config)
    //  axios本身的返回值是promise
}

// 方法2
// export function request(config){
// // 创建axios实例
// const instance=axios.create({
//     baseURL:'http//123.207.32.32:8000',
//     timeout:5000
// })
// // 发送真正的网络请求
// instance(config.baseConfig).then(res=>{
//    config.success(res)
// }).catch(err=>{
//    config.failure(err)
// })
// }