
var arr = [1, 345, 234, 21, 56789]

function peakElement(arr){

    if(arr.length ===0){
        return 0
    }

    for(let i = 0 ; i<=arr.length ; i++){
        if(arr[i] >= arr[i+1] && arr[i] >= arr[i-1]){
            return i
        }
    }
}

console.log(peakElement(arr))