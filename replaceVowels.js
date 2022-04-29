// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// // 
// solution

function replace(s){
    let vowels = [`a`,`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`]
    
    return s.split('').map(item => vowels.includes(item) ? '!':item).join('')
}

or 

function replace(s){
    return s.replace(/[aeiou]/gi,"!")
}



//     // in this case, the s string is split then mapped by each item and if the item matches the vowel it replaces it with '!' then it is joined back to a string.

//     test 
//     replace("Hi!") , "H!!")
// replace("!Hi! Hi!") , "!H!! H!!")
// replace("aeiou") , "!!!!!")
// replace("ABCDE") , "!BCD!")