var arr = [1, 345, 234, 21, 56789];

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray(arr));
