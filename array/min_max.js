
var arr = [1, 345, 234, 21, 56789]

function min_max(arr){
    arr.sort((a,b) => a-b)
    return {min : arr[0] , max : arr[arr.length -1]}
}

console.log(min_max(arr))