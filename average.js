// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// solution
function find_average(array) {
    let sum = 0
    if (array.length == 0){
      return sum
    }else{
      let sum = 0
       for (let i=0; i<array.length;i++){
      sum += array[i]
      }
    return sum/array.length;
    }
  }

//   test 
// find_average([1,1,1]), 1);
// find_average([1,2,3]), 2);
// find_average([1,2,3,4]), 2.5);