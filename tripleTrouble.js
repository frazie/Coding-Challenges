// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.


solution

function tripleTrouble(one, two, three){
    //Solution
    let str = ''
    for (i=0;i<one.length;i++){
      str += one[i]+two[i]+three[i]
      
    }
    return str
   }

// test 
// "aaa","bbb","ccc"), "abcabcabc");
// "aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
// "burn", "reds", "roll"), "brrueordlnsl");