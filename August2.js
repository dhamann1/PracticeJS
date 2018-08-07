// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm feared of depends on which day of week it is... This a concrete description of my mental illness:
//
// Monday --> 12
//
// Tuesday --> numbers greater than 95
//
// Wednesday --> 34
//
// Thursday --> 0
//
// Friday --> numbers divisable by 2
//
// Saturday --> 56
//
// Sunday --> 666 or -666
//
// Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)



let AmIAfraid = (day, num) => {
  return {
    Monday: d => d == 12,
    Tuesday: d => d > 95,
    Wednesday: d => d == 34,
    Thursday: d => !d,
    Friday: d => !(d % 2),
    Saturday: d => d == 56,
    Sunday: d => Math.abs(d) == 666
  }[day](num);
}


// Output will be a valid sorted array with People objects sorted by Age in ascending order

function OrderPeople(people) {
  return people.sort((a, b) => a.age - b.age)
}


// Return another string such that even-indexed and odd-indexed characters of String are grouped and groups are space-separated

const sortMyString = string => {
    let even = string.split('').filter((v, i) => i % 2 === 0).join('');
    let odd = string.split('').filter((v, i) => i % 2 !== 0).join('');
    return even + ' ' + odd;
}