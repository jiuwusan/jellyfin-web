import request from './request'
import ApiGenerator from './ApiGenerator'

const { genApi } = new ApiGenerator(request, '/pt-api',)

export const torrentsApi = genApi({
    // 获取列表
    querylist: '/torrents',
    // 添加到 qBittorrrent
    toJellyfin: '/toJellyfin'
})
