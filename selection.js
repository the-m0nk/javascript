
// Select Minimums and Swap  Time Complexity n^2
function selection_sort(arr){
    for(let i = 0 ; i <= arr.length - 2 ; i++){  // n-1 times
        var min = i;
        for(let j = i ; j <= arr.length - 1 ; j++){    // N times
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp
    }
    return arr;
}
var arr = [4,2,1,3,4,5,8,6]
console.log(selection_sort(arr) , "Sorted")