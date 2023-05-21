import { ApiLock, Api, ApiDict } from './type'

class ApiGenerator {

    // 同意前缀
    private baseURL: string = '';
    // 请求实例
    private instance: Function;
    // 返回拦截
    private transformRequest: Function | undefined;
    // 请求拦截
    private transformResponse: Function | undefined;
    // 请求锁
    private apiLock: ApiLock = {};
    /**
     * @param {*} instance 实例化信息
     * @param {*} baseURL 根路径
     * @param {*} transformRequest 修改请求数据 (config)=>{}
     * @param {*} transformResponse 修改响应数据 (res)=>{}
     */
    constructor(instance: Function, baseURL: string, transformRequest?: Function, transformResponse?: Function) {

        this.baseURL = baseURL;
        this.instance = instance;
        this.transformRequest = transformRequest;
        this.transformResponse = transformResponse;
        // // 请求锁
        this.apiLock = {};
    }

    // 负责生产 api
    factory = (api: Api) => {
        let option: {}
        switch (Object.prototype.toString.call(api)) {
            case '[object Object]':
                option = api;
                break;
            case '[object String]':
                let apiArr = api.replace(/\ +/g, ' ').split(' ');
                switch (apiArr.length) {
                    case 1:
                        option = { method: 'get', url: apiArr[0] }
                        break;
                    case 2:
                        option = { method: apiArr[0], url: apiArr[1] }
                        break;
                }
                break;
        }
    }

    // 构建
    genApi = (apis: ApiDict) => {

        const API: { [key: string]: Function } = {};

        //开始构建
        for (const key in apis) {
            if (Object.hasOwnProperty.call(apis, key)) {
                API[key] = this.factory(apis[key])
            }
        }

        return API
    }

}

export default ApiGenerator