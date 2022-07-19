// Write a function that checks if a given string (case insensitive) is a palindrome.


// solution
function isPalindrome(x) {
    let pall = x.toLowerCase().split('').reverse().join('')
    let split = x.toLowerCase().split('').join('')
    
    if (split==pall){
      return true
    }else{
      return false
    }
  }