// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:
//
// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {
  let goodCount = 0;
  let badCount = 0;
  let goodSide = good.split(' ').map(elem => Number(elem));
  let badSide = evil.split(' ').map(elem => Number(elem));
  let goodArmyList = [1, 2, 3, 3, 4, 10];
  let badArmyList = [1, 2, 2, 2, 3, 5, 10];
  for (let i = 0; i < goodSide.length; i++) {
    goodCount += goodSide[i] * goodArmyList[i];
  }
  for (let i = 0; i < badSide.length; i++) {
    badCount += badSide[i] * badArmyList[i];
  }
  if (goodCount > badCount) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodCount === badCount) {
    return "Battle Result: No victor on this battle field";
  } else {
    return "Battle Result: Evil eradicates all trace of Good";
  }
}

// create a function, which returns an array of functions, which return their index in the array.

function createFunctions(n) {
  var callbacks = [];
  for (var i = 0; i < n; i++) {
    var m = 0;
    callbacks.push(function() {
      return m++;
    });
  }
  return callbacks;
}

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
  minorWords = minorWords ? minorWords.split(' ').map(w => w.toLowerCase()) : minorWords;
  return title.split(' ').map((word, i) => {
    if (minorWords && minorWords.includes(word.toLowerCase()) && i !== 0) {
      return word.toLowerCase();
    } else if (word.split('').length) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join(' ');
}
