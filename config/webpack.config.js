const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
// const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin  = require('optimize-css-assets-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

const resolve = filePath => path.resolve(__dirname, filePath);

const chainWebpack = config => {
  // 设置快捷目录别名
  config.resolve.alias.set("@", resolve("../src"));
  // esLint 自动修正
  config.module
    .rule("eslint")
    .use("eslint-loader")
    .loader("eslint-loader")
    .tap(options =>
      merge(options, {
        fix: true
      })
    );
  // config.plugin('html').tap(args => {
  //     args[0].title = '360众测 - 管理员后台';
  //     args[0].favicon = resolve('../public/favicon.png');
  //     return args
  // })

  /**
   * 删除懒加载模块的prefetch，降低带宽压力
   */
  config.plugins.delete("prefetch");
};

const configureWebpack = config => {
  config.devtool = isProd
    ? "cheap-module-source-map"
    : "cheap-module-eval-source-map";

  // 需要修改默认配置
  config.optimization = {
    // js tree shaking
    usedExports: true,
    // minimizer: [
    //     new TerserPlugin({
    //         terserOptions: {
    //             compress: {
    //                 drop_console: true,
    //             },
    //             output: {
    //                 comments: false,
    //             },
    //         },
    //     }),
    //     new OptimizeCSSAssetsPlugin({})
    // ],
    splitChunks: {
      cacheGroups: {
        lib: {
          test: /[\\/]node_modules[\\/]/, // 抽取第三方库单独打包
          name: "lib",
          priority: -10,
          chunks: "all"
        }
      },
      // 上线系统无法识别默认的 ~
      automaticNameDelimiter: "-"
    }
  };

  const plugins = [
    new webpack.ProvidePlugin({
      Vue: ["vue", "default"],
      "window.Vue": ["vue", "default"]
    }),
    new webpack.HotModuleReplacementPlugin()
  ];
  config.plugins.push(...plugins);
};

module.exports = {
  configureWebpack,
  chainWebpack
};
