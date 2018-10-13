// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = (a, b) => a.filter(num => !b.includes(num));

// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(2 * sonYearsOld - dadYearsOld);
}

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise


function hero(bullets, dragons) {
  return bullets >= dragons * 2
}

// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times.

function repeater(string, n) {
  return string.repeat(n)
}

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(string) {
  return string.split('').map(function (e) {
    if (e == 'b') return 'a';
    if (e == 'a') return 'b';
    if (e == 'c') return 'c'
  }).join('');
}

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n);
}

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)

// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.

function inviteMoreWomen(L) {
  let sum = 0
  L.forEach(e => sum += e)
  return sum > 0
}

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
  if (num_pill == 1) {
    let sum = 0;
    return sum;
  } else if (num_pill == 2) {
    let sum = ((num_pill - 1) * dist);
    return sum * 100;
  } else {
    let sum = ((num_pill - 1) * dist) * 100 + ((num_pill - 2) * width);
    return sum;
  }
}

// Your task is to remove all duplicate words from string, leaving only single (first) words entries.

const removeDuplicateWords = s => s.split(' ').filter((w, i, arr) => arr.indexOf(w) == i).join(' ');

// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

function onlyOne() {
  let isTrue = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      isTrue++;
    }
  }
  return isTrue === 1;
}


// Given an array arr, swap its first and last elements and return the resulting array.

function swapArray(arr) {
  if (arr.length > 1) {
    let firstNum = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = firstNum;
  }
  return arr
}

// In this kata, you will do addition and subtraction on a given string. The return value must be a 'string'.
// Example: calculate('1plus2plus3minus4') should return '2'

function calculate(str) {
let newStr = str.replace(/plus/g, '+').replace(/minus/g, '-');
return eval(newStr).toString();
}


function copyList (l) {
  return l.map(e => e)
};

const copyList = l => l.slice();

// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found.

function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}
