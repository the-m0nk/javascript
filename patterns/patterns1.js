// Pattern Tricks (Nested Loop)
// 1. For Outer Loop , count the number of Lines
// 2. For the inner loop, focus on the columns, and connect them somehow with the rows.
// 3. Print them "*" in inner for Loop
// 4. Observe Symmetry  [Optional] 

// ****
// ****
// ****
// ****

// for(var i =0 ; i<=4 ; i++){
//     let row = "" ;
//     for(var j=0 ; j<=4 ; j++){
//         row = row + "*"
//     }
//     console.log(row)
// }


// Output
// *****
// *****
// *****
// *****
// *****

function addMaxAndMin(inputText) {
    const numArray = inputText.split(',').map(Number);
    console.log(numArray , "This is what I wantt")
    if (numArray.some(isNaN)) {
      throw new Error('Invalid input. Please provide a list of numbers separated by commas.');
    }
  
    if (numArray.length === 0) {
      throw new Error('Input must contain at least one number.');
    }
  
    // Find the maximum and minimum values in the array
    let max = numArray[0];
    let min = numArray[0];
  
    for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] > max) {
        max = numArray[i];
      }
  
      if (numArray[i] < min) {
        min = numArray[i];
      }
    }
  
    // Return the sum of the maximum and minimum values
    return max + min;
  }
  
  // Example usage:
  const inputText = '1,2,3,4,5,7,8,9';
  const result = addMaxAndMin(inputText);
  console.log(result); // Output: 10
  
  