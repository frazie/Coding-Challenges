// DESCRIPTION:
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// solution
function correctPolishLetters (string) {
    let assorted = string.normalize('NFD').replace(/[\u0200-\u036f]/g, "")
    
    return assorted.replace(/\u0142/g, "l")
  }