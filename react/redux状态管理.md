## 在县域水务项目中使用到connect


````javascript
//indx.tsx文件
ReactDOM.render(
  <ReduxProvider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </ReduxProvider>,
  document.getElementById('root')
)
````
````javascript
const mapStateToProps = (state: any) => {
  const { userInfo, collapsed, curTab } = state.storeData
  return {
    userInfo,
    collapsed,
    curTab
  }
}
const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  setStoreData: (type: string, payload: any) => dispatch(actions(type, payload))
})

const Home: FC<any> = (props: any) => {}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
````
react-redux仅有2个API，Provider和connect，Provider提供的是一个顶层容器的作用，实现store的上下文传递。

首先connect之所以会成功，是因为Provider组件：在原应用组件上包裹一层，使原来整个应用成为Provider的子组件**接收Redux的store作为props**，通过context对象传递给子孙组件上的connect。

它真正连接 Redux 和 React，它包在我们的容器组件的外一层，它接收上面 Provider 提供的 **store 里面的 state 和 dispatch**，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。使用connect()前，需要定义mapStateToProps这个函数来指定如何把当前redux store state映射到展示组件的props中。除了读取state，容器组件还能分发action。类似的方式，可以定义mapDispatchToProps()方法接收dispatch()方法闭关返回期望注入到展示组件的peops中的回调方法。

参考： 链接：https://www.jianshu.com/p/c3e6aa8f0b3b
