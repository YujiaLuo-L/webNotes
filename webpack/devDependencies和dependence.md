## devDependencies 和 dependencies

### devDependencies
```
npm install --save-dev
```
对应开发环境依赖。
这种依赖只在项目开发时所需要，即其中的依赖项不应该属于线上代码的一部分。比如构建工具webpack、gulp，预处理器babel-loader、scss-loader，测试工具e2e、chai等，这些都是辅助开发的工具包，无须在生产环境使用。

### dependencies
```
npm install --save
```
对应生产环境依赖。
这种依赖在项目最终上线或者发布npm包时所需要，即其中的依赖项应该属于线上代码的一部分。比如框架vue，第三方的组件库element-ui等，这些依赖包都是必须装在这个选项里供生产环境使用。（vue打包到生产的文件要放到dependencies中）

### devDependencies和dependencies区别
nodejs安装依赖有两种方法，一种是全部安装npm install,一种是安装生产环境的npm install --production。

dependencies 中的依赖，两种模式都会安装。

devDependencies 中的依赖，生产模式不会安装。

生产环境用--production 参数可以保证只下载运行应用必须的包（只安装dependencies的依赖）。

比如我们开发时用到eslint，那这种需要放到devDependencies 中去，因为这种有没有这个包都不影响服务端代码的执行，只是约束开发时的代码风格。

#### 在一个项目内安装A组件：
```
npm install A
```
A组件依赖的devDependencies不会被下载，只会下载A组件的dependencies。

构建服务器配置的执行命令是npm install，其实我们的依赖包安装在devDependencies还是安装在dependencies，没有任何区别(前提项目不被别人依赖使用)，反正都会下载，但是如果开发的项目作为一个组件库的话，还是建议严格管理好devDependencies和dependencies。

如果开发的是一个组件库，那么建议将babel-loader、style-loader等打包相关的工具包放到devDependencies，因为如果放到dependencies，别人引用你的组件时，也会把这些工具包安装上。我们引用组件，其实引用的是lib里编译后的文件，所以这些工具包我们是用不到的，所以如果开发时组件库，被业务代码使用的库安装在dependencies，其它的，例如打包相关、ESLint相关、Loader相关等等都要安装在devDependencies。

