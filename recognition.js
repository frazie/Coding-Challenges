// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


// solution 
function correct(string){
	let arrString = string.split('')
  let newString = []
  for (let i=0;i<string.length;i++){
    if (arrString[i]==='0'){
      newString.push('O')
    } else if (arrString[i]==1){
      newString.push('I')
    }else if (arrString[i]==5){
      newString.push('S')
    }else{
      newString.push(arrString[i])
    }
  }
  console.log(newString.join('')) 
  return newString.join('')
}

or 
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')