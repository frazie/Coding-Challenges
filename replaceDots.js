// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.a

// problem
// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

//   solution

  var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

  //this expression uses regex structure to get the solution
  // added the \ to escape special characters
// added the g so that replace is run for all occurences in the string