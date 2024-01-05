var arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]

function Negative(arr){

    arr.sort((a,b) => a-b)

    return arr

}

console.log(Negative(arr))