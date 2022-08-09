// //typeof
// console.log(typeof (1));                //number
// console.log(typeof('1'));               //string
// console.log(typeof (undefined));        //undefined
// console.log(typeof ([]));               //object
// console.log(typeof ({}));               //object
// console.log(typeof(true));              //boolean
// console.log(typeof(null));              //object
// console.log(typeof (function () { }));  //function
// console.log(typeof (console));           //object

// // console.log(typeof (obj));
// // if (obj) {
// //     console.log(true);
// // }

// //instanceof
// let fun = function () { };
// let funtest = new fun();
// console.log(funtest instanceof fun); //true

// let str = new String('xxx');
// let str1 = 'xxx';
// console.log(str instanceof String); //true
// console.log(str1 instanceof String); //false

// const arr = [];
// console.log(arr instanceof Array);
// const obj = {};
// console.log(obj instanceof Object);


// Object.prototype.toString({})       // "[object Object]"
// Object.prototype.toString.call({})  // 同上结果，加上call也ok
// Object.prototype.toString.call(1)    // "[object Number]"
// Object.prototype.toString.call('1')  // "[object String]"
// Object.prototype.toString.call(true)  // "[object Boolean]"
// Object.prototype.toString.call(function(){})  // "[object Function]"
// Object.prototype.toString.call(null)   //"[object Null]"
// Object.prototype.toString.call(undefined) //"[object Undefined]"
// Object.prototype.toString.call(/123/g)    //"[object RegExp]"
// Object.prototype.toString.call(new Date()) //"[object Date]"
// Object.prototype.toString.call([])       //"[object Array]"
// Object.prototype.toString.call(document)  //"[object HTMLDocument]"
// Object.prototype.toString.call(window)   //"[object Window]"


console.log(Object.prototype.toString({}));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(1)   );
console.log(Object.prototype.toString.call('1'));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(function(){}));
console.log(Object.prototype.toString.call(null) );
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(/123/g));
console.log(Object.prototype.toString.call(new Date()));
console.log(Object.prototype.toString.call([]) );
// console.log(Object.prototype.toString.call(document));
// console.log(Object.prototype.toString.call(window) );