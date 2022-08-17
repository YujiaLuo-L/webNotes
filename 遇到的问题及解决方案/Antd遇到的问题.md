在做项目的时候，使用的是reat+antd。
使用antd的<InputNumber>如何实现输入的数据，离开焦点后实现四舍五入截断两位小数。
<img src='./img/ants1png.png'/>
<img src='./img/antd2.png'/>

解决如下：
跳转到对此参数的说明中，precision需要和formatter搭配使用。如果不设置formatter则会出现上述问题。
<img src='./img/antd3.png'/>
<img src='./img/antd4.png'/>