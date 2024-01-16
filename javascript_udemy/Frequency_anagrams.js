var str1 = "anagram";
var str2 = "nagaram";

function ValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  for (let j = 0; j < second.length; j++) {
    let letter = second[j];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
}

console.log(ValidAnagram(str1, str2));
