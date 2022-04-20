// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


// solution

function noBoringZeros(n) {
    if (n == 0){
        return 0
    }else {
      while (n%10 == 0){
        n /= 10
      }
    }
  return n
  }
or 

function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }

//   test 
//   noBoringZeros(1450), 145)
// noBoringZeros(960000), 96)
// noBoringZeros(1050), 105)
// noBoringZeros(-1050), -105)