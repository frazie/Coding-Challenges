// <!-- DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// solution -->
function distinct(a) {
let chars = a;
let uniqueChars = [...new Set(chars)];

  return uniqueChars
}