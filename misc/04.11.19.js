// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  }
  let numArray1 = [];
  let numArray2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      numArray1.push(a[i]);
      numArray2.push(b[i]);
    }
  }
  numArray1.reverse();
  if (numArray1.length === 2 && numArray1.toString() === numArray2.toString()) {
    return true;
  }
  return false;
}


// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.


function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }
  return count;
}

// Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(inputString) {
  let numObj = {};
  let oddCount = 0;
  inputString = inputString.split('').map(char => numObj[char] ? numObj[char]++ : numObj[char] = 1)
  for (let key in numObj) {
    if (numObj[key] % 2 === 1) {
      oddCount++;
    }
  }
  if (oddCount > 1) {
    return false;
  }
  return true;
}

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft && yourRight === friendsRight || yourLeft ===
    friendsRight && friendsLeft === yourRight) {
    return true;
  }
  return false;
}

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
  let a = [];
  for (i = 1; i < inputArray.length; i++) {
    a.push(Math.abs(inputArray[i] - inputArray[i - 1]));
  }
  return Math.max(...a);
}

// Write a function, which takes two arguments and returns an array. First argument is an array of values, scecond is multiplier. Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.

const multiplyAndFilter = (array, multiplier) => {
  return array.filter(num => 'number' === typeof num).map(num => num * multiplier);
}
