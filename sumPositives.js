// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// solution
function positiveSum(arr) {
    let newArr = arr.sort(function(a, b) { return a - b; })
    let sum = 0
    let deletes =[]
    
    for (let i=0;i<newArr.length;i++){
      if(newArr[i] < 0) {
        deletes.push(newArr[i]);
      }else{
        sum += newArr[i];
      }
    }
    
    return sum
  }

//   test 
//   positiveSum([1,2,3,4,5]),15);
// positiveSum([1,-2,3,4,5]),13);
// positiveSum([]),0);
// positiveSum([-1,-2,-3,-4,-5]),0);
// positiveSum([-1,2,3,4,-5]),9);