// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// solution
function accum(s) {
	let word = [...s]
  let final = []
  for (let i = 0;i < word.length; i++){
    final.push(word[i].repeat(i+1))
  }
  let converted = final.map(a => a.charAt(1).toUpperCase() + a.slice(1).toLowerCase()).join('-')
  
  return final[0].concat(converted)
}