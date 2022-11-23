<!-- /**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
    // 首先分割字符串为字符串数组
    let numlist=[];
    let strlist=[];
    const list=Array.from(s);
    const pattern2 = new RegExp("[a-z]+");
    // const pattern3 = new RegExp("[0-9]+");
    list.forEach((item)=>{
        if(pattern2.test(item)){
            strlist.push(item)
        }else{
            numlist.push(item)
        }
    })
    if(Math.abs(numlist.length-strlist.length)>=2){
        return ""
    }else{
        let resultstr='';
        if(numlist.length!==strlist.length){
            if(numlist.length>strlist.length){
     resultstr=numlist.pop();
            }else{
                resultstr=strlist.pop();
            }   
        }
        while(strlist.length>=1){
                resultstr=resultstr+strlist.pop()+numlist.pop()
            }
            return resultstr;
    }
};
    
reformat('vd89er55') -->
const find=()=>{

}
find([1,3,2,1,4,2,4]);