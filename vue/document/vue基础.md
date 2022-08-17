## Vue项目目录
### 1、public/index.html
pubilc/index.html是一个模板文件，作用是生成项目的入口文件，webpack打包的js,css也会自动注入到该页面中。我们浏览器访问项目的时候就会默认打开生成好的index.html。
index.html是一个总的入口文件，vue是单页面应用，挂在id为app的div下然后动态渲染路由模板

参考：
 <https://segmentfault.com/q/1010000020213973> 


## 一些对象
Data对象：vue中的data方法中返回的对象；

Dep对象：每一个Data属性都会创建一个Dep，用来搜集所有使用到这个Data的Watcher对象；

Watcher对象：组件视图对象，主要用于渲染DOM
 
## vue更新DOM的原理
Vue中的数据更新是异步的,当数据变化的时候，vue会开启一个队列缓存在同一事件循环中发生的所有数据改变。（同一个watcher被多次触发，只会被推入到队列中一次）。在修改完之后，不会立刻重新渲染DOM。


1、修改 Vue 中的 Data 时，就会触发所有和这个 Data 相关的 Watcher 进行更新。
2、首先，会将所有的 Watcher 加入队列 Queue。
3、然后，调用 nextTick 方法，执行异步任务。
4、在异步任务的回调中，对 Queue 中的 Watcher 进行排序，然后执行对应的 DOM 更新。

在vue的nextTick回调中能获取最新的DOM
$nextTick 能够获取更新后的DOM

 参考：
<https://zhuanlan.zhihu.com/p/364479245>


## 在函数里写setup和<script setup lang='ts'>

参考：
<https://juejin.cn/post/7052531217333223437>

<https://juejin.cn/post/7031565983269519367#heading-7>



## router


## vue生命周期

周期：开始创建->初始化数据->编译模板->挂载Dom->渲染、更新->渲染、卸载
组件创建阶段
①beforeCreate：实例化被完全创建出来之前，这时data和method都没有初始化，不可以调用他们。
②create：这时data和method都已经完成了初始化。在模板渲染成HTML之前调用，即通常初始化某些属性值，然后再渲染成视图。
③beforeMount：模板在内存中已编辑但尚未渲染到页面中
④Mount：实现创建期间的最后一个生命周期函数。
组件运行阶段：在模板渲染成HTML后调用，通常是初始化页面完成后，再对HTML的dom节点进行一些需要的操作。
⑤beforeUpdata：这是再组件运行阶段的钩子，这时页面中的数据显示的是旧数据，但是组件中的data是最新的，页面和data还没有完成同步。
⑥update：data和页面完成同步。data和页面都是最新。
组件销毁阶段：
⑦beforeDestory：还没有真正执行销毁过程，过滤器等都还可用。
⑧Destory：组价已销毁，数据、过滤器、函数等都不可用了
Keep-alive 独有的生命周期：activated和deactivated的。用keep-alive包裹的组件在切换时不会进行销毁，二十缓存到内存中并执行deactivated钩子函数，命中缓存渲染后会执行activated钩子函数。
Keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM
使用原则：当我们在某些场景下不需要让页面重新加载时，我们可以使用keepalive

## 组件通讯
### 父组件向子组件传值
props：父组件向子组件传值。
父组件使用v-bind绑定要传递给子组件的数据。
子组件通过props接受父组件传递下来的值。

### 子组件向父组件传值

$emit 绑定一个自定义事件，当这个事件被执行的时候就会将值传递给父组件，而父组件通过v-on监听并接受参数

### 父子组件和非父子组件之间通信

eventBus事件总线（$emit/$on)

（1）创建事件中心管理组件之间的通信

## vue3动态组件的使用
 <component :is="componentName"></component>
is的值是哪个组件的名称，就显示哪个组件

<template>保留页面加载时隐藏的内容
如果有一些需要重复使用的HTML代码，则可以使用<temlate>代码


## Vue中全局组件的注册使用
我们经常会在利用Vue开发的项目中，多次重复使用某一段代码结构，这就需要我们把它封装成公共组件，注册在全局进行多次复用。

参考：
<https://blog.csdn.net/weixin_57246557/article/details/119764169>
