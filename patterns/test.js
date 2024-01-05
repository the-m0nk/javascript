// console.log(3+3)

// console.log(3 + "3")

// console.log("3" +   + 3)

// console.log(3 + + "3")

// console.log(3 + 3 - 3)

// console.log("3" + "3" - "3")

// function foo(){
//     var x = 5;
//       if(x=4){
//         console.log("Hello");
//       }
//         else{
//             console.log("Hi")
//         }

//   return 0
//   }

//   console.log(foo())

let a = [2, 3, 6];

function factorial(i) {
  let result = 1; 
  for (var j = i; j > 1; --j) {
    result *= j;
  }
  return result; 
}

for (const obj of a) {
  console.log(factorial(obj));
}

