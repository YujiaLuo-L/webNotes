## router render
````javascript
<Route
      exact
      path="/index"
      key="container"
      render={(props) => <Container {...props} />}
    />
````
render属性能使你便捷渲染内联组件或是嵌套组件。可以给这个属性传入一个返回react组件的函数，当路由的路径匹配时调用，同时，render属性也会接受所有由router传入的所有参数。

## router component
值为一个react组件

````javascript
    <Route exact path="/login" component={Login} />
````
## router children
children属性是这三个属性中比较特殊的一个，它的值为一个返回react组件的函数，当route有children属性时，不管当前的路径是否与route匹配，该函数都会执行，同时，children属性也会接受所有由route传入的所有参数。


内联的component方法当父组件的render方法每次（非第一次）执行时（比如setState造成）都会使得component方法返回的组件再次重新执行初始化生命周期函数，而render属性的方法就不会，它在父组件再次执行render是时只会触发组件的update生命钩子


使用component模式写法，不能增加渲染条件，而children方式和render方式接收的是函数，可以在函数内部根据不同条件，选择渲染不同的内容。
````javascript
// 根据是否有Token 来决定去到哪个页面 类似vue中的beforeEach守卫
<Route
        path = '/home'
        render={() => {
          if (Token) {
            return (
              <Home/>
            )
          }else{
            return <Redirect to="/login" />
          }
        }}
      />
````