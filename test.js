// /**
//  * @param {string} s
//  * @return {string}
//  */
//  var reformat = function(s) {
//     // 首先分割字符串为字符串数组
//     let numlist=[];
//     let strlist=[];
//     const list=Array.from(s);
//     const pattern2 = new RegExp("[a-z]+");
//     // const pattern3 = new RegExp("[0-9]+");
//     list.forEach((item)=>{
//         if(pattern2.test(item)){
//             strlist.push(item)
//         }else{
//             numlist.push(item)
//         }
//     })
//     if(Math.abs(numlist.length-strlist.length)>=2){
//         return ""
//     }else{
//         let resultstr=;
//         if(numlist.length!==strlist.length){
//             if(numlist.length>strlist.length){
//      resultstr=numlist.pop();
//             }else{
//                 resultstr=strlist.pop();
//             }
//         }
//         while(strlist.length>=1){
//                 resultstr=resultstr+strlist.pop()+numlist.pop()
//             }
//             return resultstr;
//     }
// };

// reformat(vd89er55)


//
// /**
//  * @param {string} s
// * @return {string}
// */
// var reverseWords = function(s) {
// const list=s.split(' ');
// let len=0;
// let result='';
// while(len<list.length){
// for(let i=list[len].length-1;i>=0;i--){
//    result+=list[len][i]
// }
// result+=' ';
// len++;
// }
// return result.trim();
// };
// reverseWords("let's kkk sjfhui sadkj")

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var findMin = function(nums) {
//    const len=nums.length;
//    let result=[];
//    for(let i=len-1;i>0;i--){
//        if(nums[i]>nums[i-1]){
//            result.unshift(nums[i])
//        }else{
//            result.push(nums.slice(0,i))
//            return result[0]
//        }
//    }
//     return result[0]
// };
// findMin([4,5,6,1,2,3])
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//     // nums.sort((a,b)=>b-a)
//     // let chongfu=1;
//     // for(let i=0;i<nums.length-1;i++){
//     //     if(nums[i]===nums[i+1]){
//     //         chongfu++;
//     //     }else{
//     //         chongfu=1;
//     //     }
//     //     if(chongfu===2){
//     //         return true
//     //     }
//     // }
//     // return false
//     let myset=new Set()
//     nums.forEach((item)=>{
//     if(!myset.add(item)){
//      return true
//     }
//     })
//     return false
    
// };
    
// containsDuplicate([1,2,3,1])

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  var intersect = function(nums1, nums2) {
//     let len1=nums1.length;
//     let len2=nums2.length;
//     let result=[];
//     for(let i=0;i<len1;i++){
//         for(let j=0;j<nums2.length;j++){
//             if(nums1[i]===nums2[j]){
//                 result.push(nums1[i])
//                 nums2.splice(j,1)
//                 break;
//             }
//         }
//     }
//     return result
// };
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  var intersect = function(nums1, nums2) {
//     // let len1=nums1.length;
//     // let len2=nums2.length;
//     // let result=[];
//     // for(let i=0;i<len1;i++){
//     //     for(let j=0;j<nums2.length;j++){
//     //         if(nums1[i]===nums2[j]){
//     //             result.push(nums1[i])
//     //             nums2.splice(j,1)
//     //             break;
//     //         }
//     //     }
//     // }
//     // return result
//     // 对这两数组排序
//     nums1.sort((a,b)=>a-b)
//     nums2.sort((a,b)=>a-b)
//     let finger1=finger2=0;
//     let result=[];
//     while(finger1<nums1.length & finger2<nums2.length){
//         if(nums1[finger1]===nums2[finger2]){
//             result.push(nums1[finger1])
//             finger1++;
//             finger2++;
//         }else if(nums1[finger1]>nums2[finger2]){
//             figner2++
//         }else{
//             finger1++
//         }
//     }
//     return result
//     };
    
// intersect([4,9,5],[9,4,9,8,4])

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  var rotate = function(matrix) {
//     let row1=0;
//     let row2=matrix.length-1;
//     while(row1!==row2){
//         for(let i=0;i<matrix.length;i++){
//             let temp=matrix[row1][i];
//             matrix[row1][i]=matrix[row2][i];
//             matrix[row2][i]=temp
//         }
//         row1++;
//         if (row1 != row2) {
//             row2--;

//         } else {
//             break
//         }
//     }
    
//     for(let i=0;i<matrix.length;i++){
//         for(let j=i+1;j<matrix.length;j++){
//             const temp=matrix[i][j];
//             matrix[i][j]=matrix[j][i];
//             matrix[j][i]=temp
//         }
//     }
//     return matrix
// };
    
// rotate([1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16])
/**
 * @param {number} x
 * @return {number}
 */
//  var reverse = function(x) {
//     const x1=Math.abs(x);
//     const arr=x1.toString().split('')
//     let k=0
//     let t=arr.length-1
//     while(k<t){
//         temp=arr[k];
//         arr[k]=arr[t];
//         arr[t]=temp;
//         k++;
//         t--;
//      }
//      const b = arr.join()
//      const b1=arr.join('')
//      const result = parseInt(arr.join(''))
//      const k1=Math.pow(2,31)
//     if(-Math.pow(2,31)<x1 && x1<Math.pow(2,31)-1){
//         if(x1>x){
//             return -result
//         }else{
//             return result
//         }
//     }else{
//         return 0
//     }
    
// }
// reverse(1534236469)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var isAnagram = function(s, t) {

//     if(s.length!=t.length){
//         return false
//     }
//     let arr=new Map();
//      for (let i = 0; i < s.length; i++){
//          if (arr[s[i]]) {
//             arr[s[i]]+=1
//          } else {
//              arr[s[i]]=1
//          }
//     }
//     for(let j=0;j<t.length;j++){
//         if(!arr[t[j]] ||arr[t[j]]===0){
//             return false
//         }else{
//             arr[t[j]]-=1
//         }
        
//     }
    
//     return true
// };
// console.log(isAnagram('aacc', 'ccac'))

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let left=0;
     let right = s.length - 1;
     let zg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]*$/;
     while (left < right) {
        if(! zg.test(s[left])){
            left++;
            continue
         }
        if(! zg.test(s[right])){
            right--;
            continue
        }
        if(s[left].toLowerCase()===s[right].toLowerCase()){
            left++;
            right--;
        }else{
            return false
        }
    }
    return true
};
isPalindrome("")