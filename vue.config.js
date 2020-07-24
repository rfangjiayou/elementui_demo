const proxyConfig = require('./config/proxy')
const { configureWebpack, chainWebpack } = require('./config/webpack.config.js')

const NODE_ENV = process.env.NODE_ENV
const isProd = NODE_ENV === 'production'

const vueConfig = {
    productionSourceMap: !isProd,
    chainWebpack,
    configureWebpack,
    parallel: require('os').cpus().length > 1,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    // transpileDependencies: ['glob']
    // 全局scss文件
    css: {
        extract: true,
        sourceMap: isProd ? false : true,
        loaderOptions: {
            scss: {
                prependData: '@import "~@/assets/scss/index.scss";'
            }
        },
        // 关闭css module
        requireModuleExtension: true
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    devServer: proxyConfig
}
module.exports = vueConfig;