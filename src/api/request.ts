import { requestOption } from './type'

const request = (option: requestOption): Promise<any> => {
    let { url, method, data: body, headers, params } = option;
    method = method?.toUpperCase()
    if (method === 'POST') {
        body = JSON.stringify(body);
    } else if (option.method === 'GET' && params) {
        // 拼接
        for (const key in params) {
            option.url = option.url + (url.indexOf('?') > -1 ? '&' : '?') + `${key}=${params[key]}`
        }
    }
    // 添加 默认值
    !headers['Content-Type'] && (headers['Content-Type'] = 'application/json')
    return fetch(url, {
        method,
        headers,
        body
    }).then((response) => {
        if (response.status === 200) {
            // 返回的json字符串反序列化成对象,也被包装成一个Promise
            return response.json();
        }
        return Promise.resolve({ code: -99, msg: '网络异常，请重试' });
    })
}

export default request