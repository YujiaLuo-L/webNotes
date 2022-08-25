## Scoped

由来：如何避免css样式之间的污染

使用：<style lang='scss' scoped>
当style标签拥有scoped属性时，它的css样式就只能作用于当前的组件。
如果一个项目中所有的style标签都加上了scoped，相当于实现了样式的模式化。

### Scoped原理
vue中的scoped通过DOM结构以及css样式上加唯一不重复的标记：data-v-hash的方式，以保证唯一，达到样式私有模块化的目的。

### scoped三条渲染规则
（1）给HTML的DOM节点加上以一个不重复data属性来表示他的唯一性
（2）在每句css选择器的末尾加一个当前组件的data属性选择器来私有化样式
（3）如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性

### 穿透scoped
引入第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。

（1）在模板中写两次style，一次带scoped、一次不带。
（2）穿透scoped>>>