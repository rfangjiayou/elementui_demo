const mock = require('../mock'); // 引入mock/index.js
const NODE_ENV = process.env.NODE_ENV;
const isMock = NODE_ENV === 'mock';

const mockProxy = {
    '/api': {
        target: 'http://localhost:5050',
        pathRewrite: {
            '^/api': ''
        },
        changeOrigin: true
    }
};
const proxy = {
    '/api': {
        target: 'http://localhost:5050',
        pathRewrite: {
            '^/api': ''
        },
        // headers: {
        //     Origin: 'http://test.zhongce.qihoo.net',
        //     Referer: 'http://test.zhongce.qihoo.net'
        // },
        changeOrigin: true
    }
};

let config = {
    port: 5050,
    hot: true,
    open: true,
    overlay: true,
    watchOptions: {
        poll: true
    },
    proxy: isMock ? mockProxy : proxy
};
if (isMock) {
    config = { ...config, ...{ before: mock } };
}

module.exports = config;
