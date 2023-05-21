export type requestOption = {
    url: string, // 请求路径
    method?: string | 'GET', // 请求类型
    data?: any, // 提交的数据
    body?: any, // post 序列化请求体
    headers?: any, // 请求头
    params?: any
}

// 请求锁
export interface ApiLock {
    [key: string]: boolean
}

// api
export type Api = { url: string, method?: string }

// Api 字典
export interface ApiDict {
    [key: string]: string | Api
}