var arr = [7, 10, 4, 3, 20, 15];

// [3,4,7,10,15,20]

function kthLargestSmallest(arr, n) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - n];
}

console.log(kthLargestSmallest(arr, 3));
