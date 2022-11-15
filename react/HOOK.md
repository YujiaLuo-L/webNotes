## useImperativeHandle、useRef、useForward

useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值
即将子组件的指定元素暴露给父组件使用，父组件可以访问到子组件的特定元素

使用useRef可以获取到组件的内部元素
使用forwardRef在父组件获取儿子组件内部一个元素
使用useImperativeHandle在父组件上获取儿子多个元素

## useMemo、useCallback、memeo


## useContext
针对在组件传递数据中，可能存在层层嵌套的问题，在传递props的过程中，如果书写大量的...props，造成prop数据混乱的问题。

**（1）使用context**
首先引入react内置的react context api
然后创建provider
最后创建consumer使用hook可以不创建consumer

context提供一个无需为每层组件手动添加props，就能在组件树间进行数据传递的方法。

**（2）使用useContext**
useContext的机制是使用这个hook的组件在context发生变化时都会重新渲染。