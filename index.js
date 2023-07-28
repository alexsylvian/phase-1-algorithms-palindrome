function isPalindrome(word) {
  let oneString = word
  let splitString = oneString.split('')
  let reversedString = splitString.reverse()
  let joinedString = reversedString.join('')
  if (word === joinedString){
    return true
  }else{
    return false
  }
}

/* 
  apply parameter string to a variable
  split variable string into an array of strings for each letter
  reverse the array
  join the reversed array back into a single string
  compare the original parameter string to reversed string
    if match, return true
    if not a match, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  oneString = "racecar"
  console.log(oneString)
  let splitString = oneString.split('')
  console.log(splitString)
  let reversedString = splitString.reverse()
  console.log(reversedString)
  let joinedString = reversedString.join('')
  console.log(joinedString)
  console.log(isPalindrome(oneString))
}

module.exports = isPalindrome;








// function isPalindrome(str) {
//   // Remove non-alphanumeric characters and convert to lowercase
//   const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   // Compare the cleaned string with its reverse
//   return cleanedString === cleanedString.split('').reverse().join('');
// }

