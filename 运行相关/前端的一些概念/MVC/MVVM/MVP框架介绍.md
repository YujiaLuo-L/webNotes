MVC

Model

负责存储页面的业务数据，以及对相应数据的操作

View

负责页面的显示逻辑

Controller
View和Model的纽带，负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller中的事件触发器就开始工作了，通过调用Model层，来完成对Model的修改，然后Model层再去通知View层更新。


View和Model应用了观察者模式，当Model层发生改变的时候它会通知有关View层更新页面。

MVVM

Model
代表数据模型，数据和业务逻辑都在Model层中定义

View
代表UI视图，负责数据的展示

ViewModel
负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；

Model和View无直接关联，通过ViewModel进行联系
Model和ViewModel之间有着双向数据绑定的联系
当Model中的数据改变时会触发View层的刷新
View中由于用户交互操作而改变的数据也会在Model中同步
开发者只需要专注于数据的维护操作而不需要自己操作DOM

MVP

在MVC模式中使用观察者模式，来实现当Model层数据发生变化的时候，通知View层的更新。

