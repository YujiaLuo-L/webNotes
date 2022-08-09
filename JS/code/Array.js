// 判断一个数组是否为空
let arr=[] ;
if (arr==false) {
    console.log("if直接判断arr:    ",true);
} else {
    console.log("if直接判断arr:    ",false);
}

// 判断一个对象是否为空
let obj={ };
if (obj==='null') {
    console.log("if直接判断obj:    ",true);
} else {
    console.log("if直接判断obj:    ",false);
}

console.log(!arr);
console.log(!arr);
console.log(typeof (arr));

//判断对象是否为空
// JSON.stringify(obj)=="{}"
console.log(JSON.stringify(obj) == "{}"); //true

//for...in...
var fun = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
objIsNull = fun(obj);
console.log(objIsNull); //true
 
// Object.getOwnPropertyNmages()方法
var objarr = Object.getOwnPropertyNames(obj);
console.log(objarr.length == 0); //true

// Object.keys()方法

var objKeys = Object.keys(obj);
console.log(objKeys.length==0); //true

const layer = [];
if (layer) {
    console.log(111,true);
} else {
    console.log(111,false);
}

const obj1 = {};
console.log(Array.prototype.isPrototypeOf(arr)); //true
console.log(Object.prototype.isPrototypeOf(arr)); //true
console.log(Array.prototype.isPrototypeOf(obj1)); //false

console.log(Array.isArray(arr)); //true 
console.log(Array.isArray(obj)); //false 
