
## ifream嵌入
name	规定<iframe>的名称
width	规定<iframe>的宽度
height	规定<iframe>的高度
src	规定在<iframe>中显示的文档的URL
frameborder	规定是否显示<iframe>周围的边框。（0为无边框，1为有边框）
align	规定如何根据周围的元素来对齐<iframe>(left,rihgt,top,middle,bottom)。
scroling	规定是否在<iframe>中显示滚动条。（yes,no,auto)
	
父级给iframe内部传递参数
（1）直接在iframe的src属性中拼接上参数
接收：直接使用window.location.search接收，然后对接收到的进行处理
