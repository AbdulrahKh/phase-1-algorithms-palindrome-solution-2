function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

  if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
  the functiion isPalindrome takes in a parameter called "word"
  it uses a loop that goes through the first half of the inputted word
  i is the starting index of the word
  j is the last index  of the word
  it compares the first and last characters of the word at each iteration 
  if they are not equal, it returns false meaning the word is not a palindrome
  once it has checked all the way up to the middle of the word, it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

   console.log("Expecting: false");
   console.log("=>", isPalindrome("Durr"));

    console.log("Expecting: false");
    console.log("=>", isPalindrome("cat"));
  }

module.exports = isPalindrome;
