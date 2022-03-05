// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// solution
function fakeBin(x){
    let arr = x.split('').map(n => n.replace(/[0-4]/gi,0)).join('')
    let final = arr.split('').map(n => n.replace(/[5-9]/gi,1)).join('')
   
    return final
  }

//   it is important to not the order of operations here,
// begin by mapping the lower values then proceed to the higher values

// test 
// fakeBin('45385593107843568'), '01011110001100111');
// fakeBin('509321967506747'), '101000111101101'); 
// fakeBin('366058562030849490134388085'), '011011110000101010000011011');