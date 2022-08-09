// forEach()

const arr = [1, 2, 3, 4, 5];
const objArr = [{ name: 'll', age: 18 }, { name: 'jj', age: 18 }]
const obj = { name: 'zz', age: 18, school: '清华' }

// forEach()
console.log('原数组',arr,);
objArr.forEach((item) => {
    item.age++;
})
console.log('forEach循环后数组', objArr);

