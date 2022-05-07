// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// solution
function problem(x){
    if (typeof x == "string"){
      return "Error"
    }else {
      return (x*50)+6
    }
  }

  or 

  const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// test

// problem(0), 6;
// problem(1.2), 66;