````javascript
module.exports = {
  root: true,
  env: { //指定想启用的环境，并时设置它们维true
    browser: true,
    es2021: true,
    node: true
  },
  // （1）基本的规范，去检查指定类型的文件
  extends: [ //指定配置的字符串（配置文件的路径、可共享配置的名称）
    // plugin  包名（省略前缀）/配置名称
    // 例如：plugin：react/recommended
    // essential基本，recommended推荐
    'plugin:vue/essential',
    'eslint:recommended',//启用一系列核心规则，这些规则报告一些常见问题，在规则页面中被标记为√
    'plugin:prettier/recommended'
    // "airbnb-base"
  ],
  // parseoptions解析器选项
  parserOptions: {
    parser: 'babel-eslint',//babel-eslint一个对babel解析器的包装，使其能够与eslint兼容
    ecmaVersion: 13, //支持ES13（es2020）语法
    parser: '@typescript-eslint/parser',//将ts转成与estree兼容的形式，以便在eslint中使用
    sourceType: 'module'//设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
  },
  // (1)dinginess自己的规则，可以理解为引入额外的rules，需要在rules，extends中定义后才生效
  plugins: ['vue', '@typescript-eslint'],
  // （1）各种限定规则，对代码进行各种限制
  rules: {//启用的规则和各自的错误级别
    // off或0 关闭规则，warn或 1 开启规则，警告级别warn ； error 或 2 开启规则，使用错误级别error
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'array-bracket-newline': ['error', 'consistent'],//咋数组开括号后和闭括号前强制换行
    'array-bracket-spacing': [2, 'never'],//强制数组方括号中使用一致的空格
    'array-element-newline': ['error', 'consistent'], //强制数组元素间出现换行always(默认)要求在数组元素间换行，never禁止在数组元素间换行，consistent需要一致地使用数组元素之间的换行符。。。
    'arrow-spacing': [ //强制箭头函数前后使用一致的空格
      2,
//以下为默认值，true意味着应该一个或多个空格，false意味没有空格
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': ['error', 'always'],//禁止或强制在代码块中开括号前和闭括号后有空格。always要求使用一个或多个空格，never表示禁用空格
    'comma-dangle': ['error', 'never'],//要求或禁止使用拖尾逗号
    'comma-spacing': [//强制在都好周围使用空格
      2,
      {
        before: false,//禁止在逗号前使用空格
        after: true //要求在逗号后使用空格
      }
    ],
    'comma-style': ['error', 'last'],//逗号风格，last（默认）表示，要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    eqeqeq: ['error', 'always', { null: 'ignore' }],//要求使用===和！==
    'key-spacing': [//强制在对象字面量的键和值之间使用一致的空格
      2,
      {
        beforeColon: false, //key和： 之间
        afterColon: true   //：和value之间
      }
    ],
    'keyword-spacing': [//强制关键字周围空格的一致性
      2,
      {
        before: true,//关键字之间
        after: true //关键字之后
      }
    ],
    'object-curly-spacing': [2, 'always'],//强制在花括号中使用一致的空格
    'space-before-function-paren': 0,//要求或禁止函数圆括号之前有一个空格
    'template-curly-spacing': 'off',//强制模板字符串中空格的使用
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-irregular-whitespace': 2,//禁止不规则的空白
    'no-multi-spaces': [//静止出现多个空格
      'error',
      {
        ignoreEOLComments: true //忽略行尾注释前的多个空格
      }
    ],
    'no-trailing-spaces': 2, //禁止行尾空白
    'no-unused-vars': ['error', { args: 'none' }] //禁止未使用过的变量
  }
};
````