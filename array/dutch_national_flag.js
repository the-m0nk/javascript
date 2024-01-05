var arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]

function dutch(arr){

    arr.sort((a,b) => a-b)
    return arr
}


console.log(dutch(arr))