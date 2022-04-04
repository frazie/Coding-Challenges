// DESCRIPTION:
// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// soln
function preFizz(n) {
    let numArray = []
    for (let i=1; i<=n;i++){
      numArray.push(i)
    }
    return numArray
  }

//   test 
// preFizz(1), [1],
// preFizz(2), [1,2],
// preFizz(3), [1,2,3],
// preFizz(4), [1,2,3,4], 
// preFizz(5), [1,2,3,4,5]