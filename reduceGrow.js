// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// solution 
function grow(x){
    let result = x.reduce((product, current) => product * current)
    return result
  }


//   test 
//   grow([1, 2, 3]), 6);
// grow([4, 1, 1, 1, 4]), 16); 
// grow([2, 2, 2, 2, 2, 2]), 64); 