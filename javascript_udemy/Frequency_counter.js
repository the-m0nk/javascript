// Return true if the square of arr1 is present in arr2 time Complexity N^2
var arr1 = [1, 2, 3];
var arr2 = [4, 1, 9];

function Same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2); // Important

    if (index === -1) {
      return false;
    }
  }
  return true;
}

// O(n) time complexity
function Same_Optimized(arr1, arr2) {
  console.log(arr1.length, arr2.length);
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let obj of arr1) {
    frequency1[obj] = (frequency1[obj] || 0) + 1; // used to create the Frequency of Each element and store it in arr
  }

  for (let obj of arr2) {
    frequency2[obj] = (frequency2[obj] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false;
    }
    if (frequency1[key] !== frequency2[key ** 2]) {
      return false;
    }
  }
  console.log(frequency1, "11111");
  console.log(frequency2, "22222222");
  return true;
}

// console.log(Same(arr1, arr2));

console.log(Same_Optimized(arr1, arr2));
