// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// solution
function digitalRoot(n) {
    let numbers = [...n.toString()]
    let sums = numbers.map(a => +(a)).reduce((a,b)=>a+b,0)
    
    if (sums.length == 1){
      return sums
    }else if (sums.length == 2){
      let fina = [...sums.toString()]
      let mwiah = fina.map(a => +(a)).reduce((a,b)=>a+b,0)
      return mwiah
    }else{
      let fina = [...sums.toString()]
      let mwiah = fina.map(a => +(a)).reduce((a,b)=>a+b,0)
      
      let final = [...mwiah.toString()]
      let threes = final.map(a => +(a)).reduce((a,b)=>a+b,0)
      
      return threes
    }
  }

or 
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }