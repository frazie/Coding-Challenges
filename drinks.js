// DESCRIPTION:
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// solution
function getDrinkByProfession(param){
    let drink = param.toLowerCase()
    
    if (drink == 'jabroni'){
      return 'Patron Tequila'
    }else if (drink == 'school counselor'){
              return 'Anything with Alcohol'
              } else if (drink == 'programmer'){
                return 'Hipster Craft Beer'
              }else if (drink == 'bike gang member'){
                return 'Moonshine'
              }else if (drink == 'politician'){
                return 'Your tax dollars'
              }else if (drink == 'rapper'){
                return 'Cristal'
              }else {
                return 'Beer'
              }
  }