// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// solution 
function sumMix(x){
    let sum = 0
    for (let i=0;i<x.length;i++){
      if (x[i] == NaN){
        sum += +(x[i])
      }else {
        sum += +(x[i])
      }
    }
    
    return sum
  }

  or 

  function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }