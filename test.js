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
//         let resultstr='';
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
    
// reformat('vd89er55')


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length<1){
        return ""
    }else if(strs.length==1){
        return strs[0]
    }else{
    for(let i=0;i<=strs[0].length;i++){
        let str=strs[0].slice(0,i+1);
        for(let j=1;j<strs.length;j++){
            if(str && strs[j].indexOf(str)>-1){
                continue;
            }else{
                return str.substring(0,str.length-1) || "";
            }
        }
        }
     }
     return str[0];
};
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))