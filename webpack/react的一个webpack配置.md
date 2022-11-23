````javascript
//用于修改webpack默认配置
const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const darkThemeVars = require('antd/dist/light-theme');

// 分析打包大小
const addAnalyze = () => (config) => {
  let plugins = [new BundleAnalyzerPlugin({ analyzerPort: 7777 })]
  config.plugins = [...config.plugins, ...plugins]
  return config
}

// 打包体积优化
const addOptimization = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.optimization = {
      splitChunks: {
        chunks: 'all', //决定要提取那些模块。默认是async：只提取异步加载的模块出来打包到一个文件中。
        minSize: 30000, //规定被提取的模块在压缩前的大小最小值，单位为字节，默认为30000
        maxSize: 0, //规定被提取的模块在压缩前的大小最小值，单位为字节，默认为30000
        minChunks: 1, //表示要被提取的模块最小被引用次数，引用次数超过或等于minChunks值，才能被提取。
        maxAsyncRequests: 5, //最大的按需(异步)加载次数，默认为 6
        maxInitialRequests: 3, //打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件），默认为4。
        // 打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件），默认为4。
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: { //核心重点，配置提取模块的方案
          vendors: {
            test: /[\\/]node_modules[\\/]/, //用来匹配要提取的模块的资源路径或名称。值是正则或函数
            priority: 10 //方案的优先级，值越大表示提取模块时优先采用此方案。默认值为0
          },
          default: {
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true //为true时，如果当前要提取的模块，在已经在打包生成的js文件中存在，则将重用该模块，而不是把当前要提取的模块打包生成新的js文件。
          }
        }
      }
    }

    // 关闭sourceMap
    config.devtool = false
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024
      }),
      new webpack.optimize.AggressiveMergingPlugin(), //合并块
      new webpack.optimize.ModuleConcatenationPlugin(),
      // 打包去除 console
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      })
    )
  }
  return config
}

module.exports = override(
  // addAnalyze(),
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve('src')
  }),
  addOptimization(),
  // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
  fixBabelImports('import',{
		libraryName:'antd',
		libraryDirectory:'es',
		style: true//自动打包相关的样式 默认为 style:'css'
	}),
  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
	addLessLoader({
    javascriptEnabled: true,
		modifyVars:{
      'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
      '@primary-color':'#1890ff',
    },
		localIdentName: '[local]--[hash:base64:5]' // use less-modules
  })
)
````

## splitChunks
**SplitChunks插件是什么？**
简单的来说就是Webpack中一个提取或分离代码的插件，主要作用是**提取公共代码**，**防止代码被重复打包**，**拆分过大的js文件**，**合并零散的js文件**。

### 给打包生成的js文件命名
有以下几种方式

#### output.filename
此选项给打包后的入口js文件命名。

#### output.chunkFilename
此选项给打包后的非入口js文件命名，那下图红框中所示就是非入口js文件

https://zhuanlan.zhihu.com/p/152097785
https://juejin.cn/post/6844904198023168013
