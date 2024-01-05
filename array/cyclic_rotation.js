var arr = [1, 2, 3, 4, 5]

function cyclic(arr){
    var c = arr.pop(arr.length-1)

    arr.unshift(c)
    return arr
}

console.log(cyclic(arr))