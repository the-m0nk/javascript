var arr1 = [1, 3, 4, 5, 7]
var arr2 = [2, 3, 5, 6]


function Intersection_and_join(arr1 ,  arr2){

    var set1 =  new Set(arr1)
    var set2 = new Set(arr2)

    var result = [...new Set([...set1 , ...set2]) ]
    return result

}

console.log(Intersection_and_join(arr1 , arr2))

const uni = Intersection_and_join(arr1, arr2);
console.log(uni.join(' '));