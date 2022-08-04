// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

// solution
function arrayMadness(a, b) {
    let aValues = a.map(a => a**2).reduce((a, b) => a + b, 0)
    let bValues = b.map(b => b**3).reduce((a, b) => a + b, 0)
        if (aValues > bValues){
          return true
        }else {
          return false
        }
  }