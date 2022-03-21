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
//first begin with replacing/normalizing the initial string, since the l character is often ignored in this case, target it specifically and make the change as seen below    

    return assorted.replace(/\u0142/g, "l")
  }

//   test 
//   correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
// correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
// correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");