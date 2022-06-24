// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


// solution: this has been completed using Regex which is not encouraged much

// function shortcut (string) {
//     let vowels = ['a','e','i','o','u']
    
//     return string.split('').filter(item => !vowels.includes(item)).join('')
    
//   }


  function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }

  // or 

  let shortcut = str => str.replace(/[aeiou]/g, '')  
  
  // the above is a regex function

//   test
//   doTest('hello', 'hll');
// doTest('how are you today?', 'hw r y tdy?');
// doTest('complain', 'cmpln');
// doTest('never', 'nvr');