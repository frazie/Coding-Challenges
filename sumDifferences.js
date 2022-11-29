// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// solution

function sumOfDifferences(arr) {
    // sorting the array in desc order
    //loop negating the current number and the immediate next number
    //then push the solution to an object then sum it all
   
    let sortedArr = arr.sort((a,b) => b - a);
    let ans = 0
    for (let i = 0; i <= sortedArr.length; i++){
        if (sortedArr === null || sortedArr.length == 1){
            return ans
        } else {
            if ((sortedArr[i] - sortedArr[i+1]) <= 0 || (sortedArr[i] - sortedArr[i+1]) >= 0 ) {
                ans += sortedArr[i] - sortedArr[i+1]
            }else{
                ans += 0
            }
        }    
    }
     return ans
}

console.log(sumOfDifferences([-17,17]))
console.log(sumOfDifferences([2,1,10]))