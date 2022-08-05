// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// solution
function position(letter){
    let myAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      let position = myAlpha.indexOf(letter)+1
      
      return `Position of alphabet: ${position}`
    }