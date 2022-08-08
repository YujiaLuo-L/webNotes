### 如何判断数组和对象是否已声明？

### 如何判断数组Array和对象Object是否为空？

#### (1)if语句中的判断

js 的if 判断实际上是 Boolean(a) ==true 来判断的，先将 a 转化为Boolean 对象 ，然后判断 这个布尔对象是true 还是false。

 ```javascript
 // 判断一个数组是否为空
const arr = [];
if (arr) {
    console.log("if直接判断arr:    ",true);
} else {
    console.log("if直接判断arr:    ",false);
}

// 判断一个对象是否为空
const obj={}
if (obj) {
    console.log("if直接判断obj:    ",true);
} else {
    console.log("if直接判断obj:    ",false);
}
```
结果：

<img src='./img/JS/if判断arr和obj为空结果.png' />

原因：

```javascript
console.log(Boolean(arr)); //true
console.log(Boolean(obj)); //true
```
因此，在写代码时，应注意不要直接通过if(obj)的方式来做判断。

下面，来看看null和undefined

```javascript
const arr=[];
const obj={};

arr==='null'; // false 
obj==='null'; // false 

let arr,obj;
arr==='undefined'; // false 
obj==='undefined'; // false 
```
原因，在对比时，会先转为bool类型然后才进行比较。

那么我们来了解一下，Boolean（）函数。
如果省略该参数或参数值为 0、-0、null、false、NaN、undefined，或空字符串（""），则该对象具有的初始值为 false。所有其它值，包括任何对象，空数组（[]）或字符串 "false"，都会创建一个初始值为 true 的对象。
'null'和'undefined'是字符串，所以不能直接比较。

想将对象转为bool值得时候，除了通过Boolean函数，还可以通过 **双重非（!!）** 的方式。

#### （2）判断Array是否为空
##### Array.length()>0
##### Array

#### （3）判断Object是否为空

