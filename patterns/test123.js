var arr = ['kamlesh','sulochan',"titu"]
var missing_value = []

// for (var i = 0; i < arr.length - 1; i++) {
//   var diff = arr[i + 1] - arr[i];
// //   console.log(diff,"diff")


//     if(diff > 1){
//         var new_element = arr[i]+(diff-1)
//         console.log(new_element, "New")
//         missing_value.push(new_element)
//     }


// //   if (diff > 1) {
// //     for (var j = 1; j < diff; j++) {
// //       missing_value.push(arr[i] + j);
// //     }
// //   }
// }

console.log(arr[arr.length - 1])

for(let i=arr[0];i<=arr[arr.length-1];i++){
    if(!arr.includes(i)){
        missing_value.push(i)
    }   
}


console.log(missing_value)

