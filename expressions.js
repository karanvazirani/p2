/*
    CIT 281 Project 2
    Name: Karan Vazirani
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Returns a single lowercase letter
function getRandomLetter() {
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
//Returns a random string
function getRandomString(min, max) {
    

    return Math.floor(Math.random() * (max - min) + min);
}
//return a string in ascending orderq
function  getSortedString(string){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
  }
  const varName = function() { }
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(10, 20);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomString(0,alphabet.length)];
}

console.log(result);
