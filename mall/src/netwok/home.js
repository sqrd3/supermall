import { request } from "./request";
// 方便管理数据请求
// 每个页面的请求封装
export function gethomemultidata(){
    return request({
        url:'/home/multidata'
    })
}