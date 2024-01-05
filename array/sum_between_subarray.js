let arr = [15, 2, 4, 8, 9, 5, 10, 23 ];

function ArraySum(arr , sum){

    for(let i = 0 ; i <= arr.length ; i++){

        var sumofArray = arr[i]
        if(sumofArray === sum){
            console.log("Sum of the Sub Array" + i)
            return 
        }
        else{
            for(let j = i+1 ; j<=arr.length ; j++){
                sumofArray += arr[j];
                if(sumofArray === sum){
                    console.log("The index of sub array is " + i , +j)
                    return 
                }
            }
        }
    }
    return 

}

console.log(ArraySum(arr , 23))