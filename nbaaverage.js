// DESCRIPTION:
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

solution
function pointsPer48(ppg, mpg) {
    let points = (ppg*48)/mpg
    if (ppg == 0 && mpg == 0){
      return 0
    }else {
      return +(points.toFixed(1))
    }
  }

or 


//   test 
//   pointsPer48(12, 20), 28.8)
//   pointsPer48(10, 10), 48.0)
//   pointsPer48(5, 17), 14.1)
//   pointsPer48(0, 0), 0)
//   pointsPer48(30.8, 34.7), 42.6)
//   pointsPer48(22.9, 33.8), 32.5)