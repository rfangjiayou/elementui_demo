const mock = require('../mock');    // 引入mock/index.js
const proxy = {
    '/api': {
        // target: 'http://localhost:5050',
        target: 'http://test.zhongce.qihoo.net',
        pathRewrite: {
            '^/api': ''
        },
        headers: {
            Origin: 'http://test.zhongce.qihoo.net',
            Referer: 'http://test.zhongce.qihoo.net'
        },
        changeOrigin: true
    }
}
const config = {
    port: 5050,
    hot: true,
    open: true,
    overlay: true,
    watchOptions: {
        poll: true
    },
    // before: mock,
    proxy: proxy
}
module.exports = config
