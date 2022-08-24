// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// solution 
function getCount(str) {
    let wrd = str.split('')
    let vowels = 0
    for (let i = 0;i < wrd.length; i++){
      if (wrd[i].includes('a')){
        vowels++
      }else if (wrd[i].includes('e')){
        vowels++
      }else if (wrd[i].includes('i')){
        vowels++
      }else if (wrd[i].includes('o')){
        vowels++
      }else if (wrd[i].includes('u')){
        vowels++
      }
  }
    return vowels
  }