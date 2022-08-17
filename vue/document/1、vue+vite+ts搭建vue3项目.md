
#### vite
大型应用存在的问题：开发服务器启动需要很长的是时间，修改文件修改后的效果也需要几秒才能在浏览器中反映出来。
vite旨在利用生态系统中的新进展解决上述问题。
#### 1、首先全局安装vite

    npm install -g create-vite-app
#### 2、创建项目
    create-vite-app vue3-vite
#### 3、


2022-05-20

安装typescript
npm install -g typescript

全局安装vite
npm install -g create-vite-app

npm init @vitejs/app




首先是创建一个项目
检索到对应目录
首先查看node和npm版本
    node -v
    npm -v
之后使用一下语句进行创建
    npm init @vitejs/app

按照提示完成创建
打开我们创建的项目
Npm I
这是一个TS项目因此需要安装对应的pakage

vite配置文件
vite.config.ts：项目的全局配置文件，启动时会自动读取该文件。
配置：@指向src目录、服务端口、打包路径、代理等。
路由（集成路由）
安装支持vue3的路由npm i vue-router@4
前置路由和后置路由
前置路由：
router.beforeEach((to, from, next) => { 
// to:要去哪个页面
 // from:从哪里来
 // next:它是一个函数。
 // 如果直接放行 next() 
// 如果要跳到其它页 next(其它页) })

在main中挂载路由

### 路由router

path路径，name路径别名
path是路径，还可以有耳机路径，如path：‘：/sysem/setting’
name无二级，相当于给path去一个别名方便记住


router之fullpath
路由跳转其实具有刷新功能
fullpath能缓存路由跳转后面携带的参数（刷新后依旧存在）
而path不能缓存跳转后携带的参数。故path能在只有两层数据结构的移动端起作用


$router 路由操作对象，只写对象，push(),replace(),go()
$route 路由信息，对象，只读对象
path和name跳转方式，都可以用query传参
而path方式，params传参会被忽略，只能用name
直白的说，query相当于get请求页面跳转时，可在地址栏看到请求参数，而params相当于post，参数不会在地址栏显示。


v-loading使用
集成vuex
在vue3 中使用pinia数据存储工具
它具有轻量化、体量小的特点
但是不可以实现时间旅行
Npm I-D pinia@next



登录页面
首先是要有输入用户名和登录密码的
那么引入element-ui
注意vue2和vue3所使用的也有所不同
Vue3中使用element-plus

需要配置eslint
需要配置sass
需要配置svg



参考: 
<https://blog.csdn.net/XH_jing/article/details/112232930>
<https://juejin.cn/post/6973288527802925092> 
<https://blog.csdn.net/weixin_41639609/article/details/121991964>