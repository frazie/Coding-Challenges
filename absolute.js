// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old


// solution 
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let date = 0
    if (dadYearsOld/2 == sonYearsOld ){
      return date
    }else{
      return Math.abs((dadYearsOld-sonYearsOld)-sonYearsOld) 
      }
    }