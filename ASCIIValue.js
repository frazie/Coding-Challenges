// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// // For ASCII table, you can refer to http://www.asciitable.com/

// solution

function getChar(c){
    return String.fromCharCode(c)
}

// test 

// getChar(55),'7')
// getChar(56),'8')
// getChar(57),'9')
// getChar(58),':')
// getChar(59),';')
// getChar(60),'<')