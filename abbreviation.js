// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// solution

function abbrevName(name){
    let doublenames = name.split(' ')
    let first = doublenames[0].charAt(0).toUpperCase()
    let second = doublenames[1].charAt(0).toUpperCase()
    
    return `${first}.${second}`
  }

//   test 
//   abbrevName("Sam Harris"), "S.H");
//   abbrevName("Patrick Feenan"), "P.F");
//   abbrevName("Evan Cole"), "E.C");
//   abbrevName("P Favuzzi"), "P.F");
//   abbrevName("David Mendieta"), "D.M");