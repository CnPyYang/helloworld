/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const glob = require('glob')
const debug = process.env.NODE_ENV === 'development'

// 配置pages多页面获取当前文件夹下的html和js
function getEntry() {
  const entries = {}

  const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.ts'))
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(/src\/pages\/(.*)\/index\.ts/)
    const pageName = match && match[1]
    entries[pageName] = {
      entry: `src/pages/${pageName}/index.ts`,
      template: `src/pages/${pageName}/index.html`,
      filename: `${pageName}.html`,
      chunks: ['chunk-vendors', 'chunk-common', pageName],
    }
  })
  return entries
}
const pages = getEntry()
const publicPath = '/studyAssistantH5/'

module.exports = {
  publicPath,
  outputDir: 'dist',
  assetsDir: 'static',
  pages,
  chainWebpack: () => {
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
    }
  },
  configureWebpack: (config) => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map'
    } else {
      // 生产环境配置
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.ts', '.vue', '.json', '.tsx', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, './src'), // 设置路径别名
        },
      },
    })
  },
  productionSourceMap: true,
  // css: {
  //   extract: !debug,
  //   sourceMap: false,
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue({ file }) {
  //             return file.indexOf('vant') !== -1 ? 37.5 : 75
  //           },
  //           propList: ['*'],
  //         }),
  //       ],
  //     },
  //   },
  // },
  parallel: require('os').cpus().length > 1,
  devServer: {
    open: false,
    host: 'fe.homework.youdao.com',
    port: 9006,
    https: false,
    hotOnly: true,
    disableHostCheck: true,
    proxy: {
      '/': {
        target: 'https://homework.youdao.com', // 接口的域名
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      },
      // '/': {
      //   target: 'https://hw-yuejuan-dev.inner.youdao.com', // 接口的域名
      //   secure: true, // 如果是https接口，需要配置这个参数
      //   changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      // },
    },
  },
  transpileDependencies: ['vuex-module-decorators'],
}
