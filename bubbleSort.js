// Adjacent Swapping  14 <> 5

function bubble_sort(arr){
    console.log(arr , "Unsorted")
    for(let i = arr.length -1 ; i <= 1 ; i++){
        
        for(let j = 0 ; j <= i -1 ; j++){
            if(arr[j] > arr[j+1]){
                // i = j
                let temp = arr[j];
                arr[j+1] = arr[j];
                temp = arr[j+1]
            }

        }
    }
    return arr
}

var arr = [4,2,1,3,4,5,8,6]
console.log(bubble_sort(arr) , "Sorted")