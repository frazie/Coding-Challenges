// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

// solution
function expressionMatter(a, b, c) {
    let combo1 = a*b*c
    let combo2 = a*(b+c)
    let combo3 = a+b*c
    let combo4 = (a+b)*c
    let combo5 = a*b+c
    let combo6 = a+b+c

    let combos = [combo1,combo2,combo3,combo4,combo5,combo6]

    console.log(Math.max(...combos))
  }

  