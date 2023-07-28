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
  function isPalindrome(word) {
  let oneString = word
  let splitString = oneString.split('')
  let reversedString = splitString.reverse()
  let joinedString = reversedString.join('') // I could put all this in one line but decided to write a line for each step to  able to demonstrate easier, it applies the string to an array, reverses it, and joins it back together
  if (word === joinedString){
    return true
  }else{
    return false // finally we check if the passed word matches the reversed result. If it does, then it's true. If not, then it's false.
  }
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  let oneString = "racecar"
  console.log(oneString)
  let splitString = oneString.split('')
  console.log(splitString)
  let reversedString = splitString.reverse()
  console.log(reversedString)
  let joinedString = reversedString.join('')
  console.log(joinedString)
  console.log(isPalindrome(oneString))

  oneString = "seventeen"
  console.log(oneString)
  splitString = oneString.split('')
  console.log(splitString)
  reversedString = splitString.reverse()
  console.log(reversedString)
  joinedString = reversedString.join('')
  console.log(joinedString)
  console.log(isPalindrome(oneString))
}

module.exports = isPalindrome;

