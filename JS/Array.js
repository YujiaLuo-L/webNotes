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

console.log(Boolean(arr)); //true
console.log(Boolean(obj)); //true
