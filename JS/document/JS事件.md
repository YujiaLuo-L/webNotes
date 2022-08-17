###（1）典型方式：
<p onclick='handleClick()'>段落</p>
将时间和标签内敛在一起会使得网站变得难以维护。
###（2）非入侵方式：
为相关的节点元素添加一个特定的类名或id，以便添加事件。可以通过on+事件名称为元素添加事件监听。
````javascript
Element.onClick()=handleClick;
Function handleClick(){};
````
通过on+事件名称添加的事件监听可以通过指定事件为null来移除

非入侵方式只能为一个元素添加一个事件监听，后添加的事件监听会覆盖前面的。
解决这个问题的办法：使用addEventListener()。
addEventListener()方法将指定的事件监听添加到元素上。
removeEventListener（）删除使用add…方法添加的事件监听

### 事件流
描述事件在文档中的传播行为，即事件如何达到目标
（1）阻止默认行为欸：preventDefault()用来阻止默认行为，例如表单提交，页面跳转。
（2）阻止事件冒泡：如果只希望事件发生在目标元素，而不想它传播到祖先元素上去，可以利用stopPropagation()阻止事件冒泡。
（3）事件委托：如果不阻止事件冒泡，那么事件会向上传递，利用这可以实现事件委托，即将节点上的事件委托到其父节点。（常用来处理子节点事件分发和动态节点的事件监听）

### 自定义事件
Let event_build=new Event('build');
其添加和删除于普通事件一致
自定义事件需要手动调用dispatchEvent来触发事件。
Event.dispatchEvent（event_build）；
如果要对事件对象添加数据，可以通过构造啊哈桑农户CustomEvent实现，需要注意的是，添加数据的属性名必须为detail，不能为其他值。
Let event_build=new CustomEvent("build",{"detail":"xxx"})


## 事件触发的方式

#### (1)典型方式
 ````javascript
 <p onclick='handleClick()'>段落</p>
````
将事件和标签内联在一起会使得网站变得难以维护。

#### （2）非入侵方式
为相关的节点元素添加一个特定的类名或id，以便添加事件。可以通过on+事件名称为元素添加事件监听。
````javascript
Element.onClick()=handleClick;
Function handleClick(){};
````

通过on+事件名称添加的事件监听可以通过指定事件为null来移除。
存在问题：非入侵方式只能为一个元素添加一个事件监听，后添加的事件监听会覆盖前面的。
解决办法 ： **addEventListener()**
addEventListener()方法将指定的事件监听添加到元素上。可以通过removeEventListener()来删除使用add…方法添加的事件监听

## 什么是事件流？

描述事件在文档中的传播行为，即事件如何达到目标。
**（1）阻止默认行为：**preventDefault()用来阻止默认行为，例如表单提交，页面跳转。
**（2）阻止事件冒泡：**如果只希望事件发生在目标元素，而不想它传播到祖先元素上去，可以利用stopPropagation()阻止事件冒泡。
**（3）事件委托：**如果不阻止事件冒泡，那么事件会向上传递，利用这可以实现事件委托，即将节点上的事件委托到其父节点。（常用来处理子节点事件分发和动态节点的事件监听）

## 如何自定义事件？
如下：

````javascript
Let event_build=new Event('build');
````
其添加和删除于普通事件一致，自定义事件需要手动调用dispatchEvent来触发事件。
````javascript
Event.dispatchEvent（event_build）；
````
如果要对事件对象添加数据，可以通过构造函数CustomEvent实现，需要注意的是，添加数据的属性名必须为detail，不能为其他值。
````javascript
Let event_build=new CustomEvent("build",{"detail":"xxx"})
````
## Js Event中on和off方法
JS中on动态绑定数据，绑定多个事件的方法
Onclick>click>on
