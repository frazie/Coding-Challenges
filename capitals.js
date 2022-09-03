// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// solution
var capitals = function (word) {
    let letters = [...word]
    
    let final = []
    
    for (let i = 0; i < letters.length; i++){
      if (letters[i] === letters[i].toUpperCase()){
        final.push(letters.indexOf(letters[i]))
      }
    }
    
    console.log(final)
    return final
  };