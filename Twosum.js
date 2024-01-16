var arr = [4,5,6 , 6]

var obj = {}
for(let value of arr){
    console.log((obj[value] || 0)+ 1)
    obj[value] 

} 

console.log(obj);
// {
//  4 = 1,
//  5 = 1,
//  6 = 2
// }