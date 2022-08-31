// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// solution
function findShort(s){
    let words = s.split(' ')
    
    let wordlength = []
    
    for (let i = 0; i < words.length ; i++){
      wordlength.push(words[i].length)
    }
    
    return wordlength.sort(function(a, b){return b - a}).pop()
  }