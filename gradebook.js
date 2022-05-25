// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// solution:

function getGrade(s1, s2, s3) {
    // Code here
    let score = (s1+s2+s3)/3
    
  switch (true) {
    case (score > 90):
           console.log('A')
        break;
    case (score >= 80):
        console.log('B')
        break;
    case (score >= 70):
        console.log('C')
          break;
    case (score >= 60) :
        console.log('D')
        break;
    default:
        console.log('F')
        break;
  }
}

getGrade(95,95,95)
