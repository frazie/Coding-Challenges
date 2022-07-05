// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// solution 
function areYouPlayingBanjo(name) {
    if (name.charAt(0) == 'R'|| name.charAt(0) == 'r'){
      return name + " plays banjo"
    }else{
      return name + " does not play banjo"
    }
  }
// or
 
const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
//   test 
//   areYouPlayingBanjo("Adam"), "Adam does not play banjo");
//   areYouPlayingBanjo("Paul"), "Paul does not play banjo");
//   areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//   areYouPlayingBanjo("bravo"), "bravo does not play banjo");
//   areYouPlayingBanjo("rolf"), "rolf plays banjo");