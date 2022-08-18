## SPA
SPA：single-page application 即单页应用
是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面。

前端三大框架都属于SPA

**优缺点：**
**优：**
具有桌面应用的即时性、网站的可移植性和可访问性
用户体验好、快，内容的改变不需要重新加载整个页面
良好的前后端分离，分工更明确

**缺：**
不利于搜索引擎的抓取
首次渲染速度相对较慢

### 首屏加载慢的原因

网络延时问题
资源文件体积是否过大
资源是否重复发送请求去加载了
加载脚本的时候，渲染内容堵塞了

### 如何解决首屏加载慢的原因

#### 减小入口文件体积

常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。
在vue-router配置路由的时候，采用动态加载路由的形式。以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件。

````javascript
{
          path: '/browse/:id',
          name: 'sceneMapView',
          component: () => import('../views/sceneMapView/index.vue'),
          meta: {
            requiresAuth: false,
          },
        },
````

#### 静态资源本地缓存
后端返回资源问题：

采用HTTP缓存，设置Cache-Control，Last-Modified，Etag等响应头

采用Service Worker离线缓存

前端合理利用localStorage

#### UI框架按需加载
在日常使用UI框架，例如element-UI、或者antd，经常性直接引用整个UI库。按需引入即可。
#### 图片资源的压缩
对页面上使用到的icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻http请求压力。
#### 组件重复打包
假设A.js文件是一个常用的库，现在有多个路由使用了A.js文件，这就造成了重复下载

解决方案：在webpack的config文件中，修改CommonsChunkPlugin的配置

minChunks为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件


#### 开启GZip压缩

````javascript
cnmp i compression-webpack-plugin -D

--------
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        }
------
const compression = require('compression')
app.use(compression())  // 在其他中间件使用之前调用

````
拆完包之后，我们再用gzip做一下压缩 安装compression-webpack-plugin。
在vue.congig.js中引入并修改webpack配置。
在服务器我们也要做相应的配置 如果发送请求的浏览器支持gzip，就发送给它gzip格式的文件 我的服务器是用express框架搭建的 只要安装一下compression就能使用。
#### 使用SSR
组件或页面通过服务器生成html字符串，再发送到浏览器

## MPA
MPA：MultiPage-page application 即多页应用
每个页面都是一个主页面，都是独立的当我们在访问另一个页面的时候，都需要重新加载html、css、js文件，公共文件则根据需求按需加载。



参考：
<https://vue3js.cn/interview/vue/first_page_time.html#%E4%B8%89%E3%80%81%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88>