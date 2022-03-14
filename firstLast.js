// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// solution
function removeChar(str){
    let arr = str.slice(1, (str.length-1))
      return arr
    };
    
// test 
// removeChar('eloquent'), 'loquen');
// removeChar('country'), 'ountr');
// removeChar('person'), 'erso');
// removeChar('place'), 'lac');
// removeChar('ooopsss'), 'oopss');