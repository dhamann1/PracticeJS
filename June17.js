// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sum = age1*age1+age2*age2+age3*age3+age4*age4+age5*age5+age6*age6+age7*age7+age8*age8;
  let sq = Math.sqrt(sum);
  return Math.floor(sq/2);
}

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

function addAny(n) {
  return function (m) {
    return n+m;
  }
}

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(n){
    return n % 2 === 0;
  });
}
