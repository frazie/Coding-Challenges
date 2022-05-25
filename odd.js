// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// solution: 

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

//   refactored code : 

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';