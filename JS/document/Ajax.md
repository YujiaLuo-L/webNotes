### Ajax
AJAX async javascript and xml异步和xml
前后台交互的能力，也就是我们客户端给服务端发送消息的工具，以及接收响应的工具。

<img src="../img/Ajax/Ajax.png">

#### Fetch
Fetch提供了一个JS接口，用于处理HTTP请求，该方法简化了从指定URL处获取资源的操作，Fetch返回一个Promise对象
Fetch请求默认不带cookie（可以通过credential:'include'来设置）

#### XHR


### HTTP代理服务器
**作用：**
（1）缓存功能，提高访问速度
（2）过滤（反病毒扫描，家长监护）
（3）负载均衡，让多台服务器服务不同的请求
（4）对不同资源的权限控制
（5）登录，允许存储历史信息

HTTP是无状态有会话的。

### 跨域
什么是跨域？如何解决跨域问题？跨域请求如何携带cookie?
<img src='../img/Ajax/URL.png'/>
简单来说跨域：
在A应用的js脚本中，调用了B的后端地址。
#### 同源策略
如果两个页面拥有相同的协议、端口和主机，那么这两个页面就属于同一个源

Img ping  ？？？
img标签也没有跨域显示，但它只能用来发送GET请求，且无法获取服务端的响应文本，可以利用它实现一些简单的、单向的跨域通信，例如跟踪用户的操作


#### 跨域解决办法

Access-Control-Allow-Origin是HTML5中定义的一种解决资源跨域的策略。

### 什么是锚点？