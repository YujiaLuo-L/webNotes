## prettier和ESlint
### prettier
prettier是一款迪马格式美化工具，用于统一代码风格，提高代码可维护性。
prettier是唯一完全自动的“风格指南”。
Prettier 在配置上面还是十分有限的，它是一种 opinionated的工具，opinionated可以翻译成固执己见的、武断的，因此可以理解为受约束的，不能任凭使用者发挥
### ESlint
ESlint是一个开源的 JavaScript 代码检查工具。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。
ESLint提供两种规则，分别是代码格式检查规则 Formatting rules 和代码质量检查规则 Code-quality rules。
    "parserOptions"：ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。
    "parser"：ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
    "env"：一个环境定义了一组预定义的全局变量
    "globals"：如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。
    "plugins"：ESLint 支持使用第三方插件
    "rules"：ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则
    "extends": 配置文件可以从基本配置扩展启用的规则集。有四种类型


参考：
<https://zhuanlan.zhihu.com/p/337536349> 