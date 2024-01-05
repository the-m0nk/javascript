var arr = [1, 1, 2, 2, 2, 2, 3]

function frequency(arr , n){
    var count = 0;
    for(let i =0 ; i<arr.length ; i++){
        
        if(arr[i] === n){
            count++;
        }
        
    }
    return count

}

console.log(frequency(arr , 2))