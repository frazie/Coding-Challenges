// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// solution

function remove(string){
    if (string[string.length-1] == '!'){
        return string.slice(0,-1)
    }else{
        return string
    }
}

or 

function remove(s){
    return s = s.replace(/!$/g, '');
  }

  or

  return s.charAt(s.length - 1) === '!' ? s.slice(0, -1) : s;
// test 
// doTest("Hi!", "Hi");
// doTest("Hi!!!", "Hi!!");
// doTest("!Hi", "!Hi");
// doTest("!Hi!", "!Hi");
// doTest("Hi! Hi!", "Hi! Hi");