import axios from 'axios'
import { handlePostReducer } from './utils'
import app from '@/main'

const instanceConfig = {
    // 指定请求超时的毫秒数(0 表示无超时时间)
    timeout: 10e3,
    // `headers` 是即将被发送的自定义请求头
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function(status) {
        return status >= 200 && status < 300 // 默认的
    },
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [
        function(data) {
            // 对 data 进行任意转换处理
            return data
        }
    ]
}

const instance = axios.create(instanceConfig)

instance.interceptors.request.use(
    config => {
        if (
            config.method === 'POST' ||
            config.method === 'post' ||
            config.method === 'PUT' ||
            config.method === 'put'
        ) {
            const ctype =
                config.headers['Content-Type'] ||
                'application/x-www-form-urlencoded'
            config.headers['Content-Type'] = ctype
            // 兼容 fetch
            if (config.body && !config.data) {
                config.data = config.body
                delete config.body
            }
            // 是 FormData 不再处理
            const isFormData = config.data instanceof FormData
            const isJsonData = ctype === 'application/json'
            if (isJsonData) {
                config.data = JSON.stringify(config.data)
            } else if (!isFormData && config.data && !config.data.$useRaw) {
                // 表现形式：windows 10 + chrome 63.0.3239.108
                // FormData 的数据格式下 Content-Type 会被强行转为 multipart/form-data
                // 因此使用 UrlSearchParams
                const params = new URLSearchParams()
                config.data = Object.entries(config.data).reduce(
                    handlePostReducer,
                    params
                )
            }
        }
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        const res = (response.data && JSON.parse(response.data)) || {}
        const { errno } = res
        res.success = false
        if (errno === 0) {
            res.success = true
        } else {
            const message =
                typeof res.errmsg === 'string'
                    ? res.errmsg
                    : typeof res.errmsg === 'object'
                        ? Object.values(res.errmsg)[0][0]
                        : JSON.stringify(res.errmsg)
            app.$message({
                type: 'error',
                message: message
            })
        }
        return res
    },
    function(error) {
        const res =
            (error.response.data && JSON.parse(error.response.data)) || {}
        if (res.status === 401) {
            if (app.$route.name !== 'Login') {
                app.$message({
                    type: 'error',
                    message: res.message
                })
                app.$router.push({ name: 'Login' })
            }
        } else if (res.status === 500) {
            app.$message({
                type: 'error',
                message: '服务器响应失败'
            })
        } else if (res.status === 503) {
            // 请求频繁，api和nginx
            app.$message({
                type: 'error',
                message: '请求过于频繁，请稍后尝试'
            })
        } else {
            app.$message({
                type: 'error',
                message: res.message
            })
        }
        return res
    }
)

export default instance
