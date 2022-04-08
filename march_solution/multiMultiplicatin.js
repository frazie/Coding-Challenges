// Coding Challenge 

// Simple Multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution

function simpleMultiplication(number) {
    // your code........
  
    if (number%2 == 0){
      
      let total = number * 8
      return total
    }else {
      let total = number * 9
      return total
    }
}