var arr = [5,1,3,2,6]



var output = arr.reduce(function(acc , curr){
    // console.log(curr, acc , "hhhh")
    if(curr > acc){
        acc = curr
    }
    return acc

} , 0)

console.log(output)