// // 判断一个数组是否为空
// let arr=[] ;
// if (arr==false) {
//     console.log("if直接判断arr:    ",true);
// } else {
//     console.log("if直接判断arr:    ",false);
// }

// // 判断一个对象是否为空
// let obj={ };
// if (obj==='null') {
//     console.log("if直接判断obj:    ",true);
// } else {
//     console.log("if直接判断obj:    ",false);
// }

// console.log(!arr);
// console.log(!arr);
// console.log(typeof (arr));

// //判断对象是否为空
// // JSON.stringify(obj)=="{}"
// console.log(JSON.stringify(obj) == "{}"); //true

// //for...in...
// var fun = function (obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }
// objIsNull = fun(obj);
// console.log(objIsNull); //true
 
// // Object.getOwnPropertyNmages()方法
// var objarr = Object.getOwnPropertyNames(obj);
// console.log(objarr.length == 0); //true

// // Object.keys()方法

// var objKeys = Object.keys(obj);
// console.log(objKeys.length==0); //true

// const layer = [];
// if (layer) {
//     console.log(111,true);
// } else {
//     console.log(111,false);
// }

// const obj1 = {};
// console.log(Array.prototype.isPrototypeOf(arr)); //true
// console.log(Object.prototype.isPrototypeOf(arr)); //true
// console.log(Array.prototype.isPrototypeOf(obj1)); //false

// console.log(Array.isArray(arr)); //true
// console.log(Array.isArray(obj)); //false



// 数组静态方法
// const arr = [1, 2, 3, 4, 5, 6]
// const objArr = [{ name: 'kk', age: 18 }]
// var b = Array.from(arr); //[1, 2, 3, 4, 5, 6]
// var b = Array.from(objArr); // [{ name: 'kk', age: 18 }]
// console.log(b);
// console.log(b);


// const obj = { name: 'kk', age: 12 }
// var b = Array.from(obj);
// console.log(b);

// const objlength = { name: 'kk', age: 12, 'length': 2 }
// var b = Array.from(objlength);
// console.log(b);


// const sxobj = { 0: 'cn', 1: 'kk', 2: 12 }
// const sxObjlength = { 2: 'cn', 1: 'kk', 0: 12, length: 2 }
// const sxObjlength1={ '2':'cn','1':'kk','0':12,'length':3}
// var b = Array.from(sxobj); //[]
// console.log(b);
// var b = Array.from(sxObjlength); //[ 'cn', 'kk' ]
// console.log(b);
// var b = Array.from(sxObjlength1); //[ 'cn', 'kk', 12 ]
// console.log(b);

// // (1)Array.from

// var b = Array.from(11); // []
// console.log(b);

// var b = Array.from('kk'); // [ 'k', 'k' ]
// console.log(b);


// Array.of（）
// var b = Array.of()      // []
// var b = Array.of(1)     // [ 1 ]
// var b = Array.of(1,2)   // [ 1, 2 ]
// var b = Array.of('1')   // [ '1' ]
// var b = Array.of(undefined) // [ undefined ]
// var b = Array.of(null)     // [ null ]
// const obj={name:'gg'}
// var b = Array.of(obj,obj)   // [ { name: 'gg' }, { name: 'gg' } ]

// var b = Array()      // []
// var b = Array(2)     // [ <2 empty items> ]
// var b = Array(1, 2)   // [ 1, 2 ]
// var b = Array('1')   // [ '1' ]
// var b = Array(undefined) // [ undefined ]
// var b = Array(null)     // [ null ]
// const obj={name:'gg'}
// var b = Array(obj,obj)   // [ { name: 'gg' }, { name: 'gg' } ]

// let arr = [1, 2, 3,]
// let arr1 = [4, 5, 6, 5]
// let obj = [{ name: 'll', age: 18 }, { name: 'kk', age: 19 }]
// const arr3 = [[1, 2], [], [3, 4]];
// console.log(arr.at(2), '      原数据', arr);  
// // 3 原数据 [ 1, 2, 3 ]   
// console.log(arr.concat(arr1), '      原数据', arr);  
// // [1, 2, 3, 4, 5, 6, 5] 原数据 [ 1, 2, 3 ]
// console.log(arr.copyWithin(1, 0, 2), '      原数据', arr);   
// // [ 1, 1, 2 ] 原数据 [ 1, 1, 2 ] 会改变原数组
// console.log(Object.entries(arr1), '      原数据', arr1); 
// // [ [ '0', 4 ], [ '1', 5 ], [ '2', 6 ], [ '3', 5 ] ] 原数据 [ 4, 5, 6, 5 ]
// console.log(Object.entries(obj), '      原数据', obj); 
// // [ [ '0', { name: 'll', age: 18 } ], [ '1', { name: 'kk', age: 19 } ] ] 原数据 [ { name: 'll', age: 18 }, { name: 'kk', age: 19 } ]
// console.log(arr.every((item) => item > 0), '      原数据', arr); 
// // true 原数据 [ 1, 1, 2 ]
// console.log(arr.fill(0), '      原数据', arr); 
// // [ 0, 0, 0 ] 原数据 [ 0, 0, 0 ] 会改变原数组
// console.log(arr1.filter((item, index) => { const test = item + index; return test>6}),'      原数据' ,arr1); 
// // [ 6, 5 ] 原数据 [ 4, 5, 6, 5 ]
// console.log(arr1.find((item) => item > 4), '      原数据', arr1); 
// // 5 原数据 [ 4, 5, 6, 5 ]
// console.log(arr1.findIndex((item) => item > 4), '      原数据', arr1); 
// // 1 原数据 [ 4, 5, 6, 5 ]
// console.log(obj.flat(), '      原数据', obj); 
// // [ { name: 'll', age: 18 }, { name: 'kk', age: 19 } ] 原数据 [ { name: 'll', age: 18 }, { name: 'kk', age: 19 } ]
// console.log(arr3.flat(), '      原数据', arr3); 
// // [ 1, 2, 3, 4 ] 原数据 [ [ 1, 2 ], [], [ 3, 4 ] ]
// console.log(arr3.flatMap((item) => item), '      原数据', arr3); 
// // [ 1, 2, 3, 4 ] 原数据 [ [ 1, 2 ], [], [ 3, 4 ] ]
// console.log(arr3, arr3.join(), '      原数据', arr3); 
// // [ [ 1, 2 ], [], [ 3, 4 ] ] 1,2,,3,4 原数据 [ [ 1, 2 ], [], [ 3, 4 ] ]
// console.log(Object.keys(arr), '      原数据', arr); 
// // [ '0', '1', '2' ] 原数据 [ 0, 0, 0 ]
// console.log(arr1.lastIndexOf(5), '      原数据', arr1); 
// // 3 原数据 [ 4, 5, 6, 5 ]
// console.log(arr1.reduce((total, num) => total - num), '      原数据', arr1);
// // -12 原数据 [ 4, 5, 6, 5 ] => 4-5-6-5=-12
// console.log(arr1.reduceRight((total, num) => total - num), '      原数据', arr1); 
// // -10 原数据 [ 4, 5, 6, 5 ]  => 5-6-5-4=-10
// console.log(arr1.sort((a,b)=>a-b),'      原数据' ,arr1); 
// // [ 4, 5, 5, 6 ] 原数据 [ 4, 5, 5, 6 ]



// 。JS的var变量进行循环和let变量进行循环
let k=Array.from(5);
k.fill(0)
console.log(k);

for(let i=0;i<5;i++)
{
    console.log(i);
    k[i]=k[i]+i;

}
console.log(k);
