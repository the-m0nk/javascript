// Maximum Sum  of Subarray of size k

var arr = [2, 3, 5, 2, 9, 7, 1 , 25 , 30];

// Brute Force
/* var a = [];

for (let i = 0; i < arr.length-2; i++) {
    let sum = 0;
    for (let j = i; j < i + 3; j++) {
        sum += arr[j];
    }
    a.push(sum)

}
console.log(a)
console.log(Math.max(...a), "121212");

*/
// Optimization

function slidingWindow(arr) {
  var i = 0;
  var j = 0;
  var sum = 0;
  const k = 3;
  var max = 0;
//   var minSum = Number.MAX_SAFE_INTEGER;
  while(j < arr.length){
    sum = sum + arr[j];
    if(j-i+1 < k){
        j++;
    }
    else if(j-i+1 === k){
        console.log("Window:", arr.slice(i, j + 1), "Sum:", sum);
        max = Math.max(max ,sum)  // To find the maximum value
        sum = sum - arr[i]
        i++
        j++
    }
  }
  return max
}

console.log(slidingWindow(arr))

