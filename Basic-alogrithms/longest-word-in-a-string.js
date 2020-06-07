// TODO
// - find the longest word from string
// - returns the length of the longest word
//
//

function findLongestWordLength(str) {
  let largestStringLength = 0;
  let splitString = [];
  let longestString;

  // splits the string by words places it in an array
  splitString = str.split(" ");

  // loops all words within splitted array and stores the biggest length and word in a variable
  for (let x = 0; x < splitString.length; x++) {
    if (splitString[x].length > largestStringLength) {
      largestStringLength = splitString[x].length;
      longestString = splitString[x];
    }
  }
  str = longestString;
  return str.length;
}

sentance = "The quick brown fox jumped over the lazy dog";

console.log(`${findLongestWordLength(sentance)}`);
