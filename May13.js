// Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

const sumR = x => x.reduce ((a,b)=> a+b,0);

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

var orderedCount = function (text) {
    var letters = text.split("");
    var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index);
    return uniqs.map((letter) => [letter, text.split(letter).length - 1]);
  };

const orderedCount = text => {
  let uniqs = text.split('').filter((letter,index) => text.indexOf(letter) == index);
  return uniqs.map((letter) => [letter, text.split(letter).length - 1]);
}

// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.
// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far, and
// the number of red marbles pulled out so far.
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  let blueLeft = blueStart - bluePulled;
  let redLeft = redStart - redPulled;
  let allLeft = blueLeft + redLeft;
  return blueLeft/allLeft;
}
