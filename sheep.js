// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integer

// solution
var countSheep = function (num){
    let str = 'sheep'
    let sheepy = []
    if (num == 0){
      return ''
    }else{
      for (let i = 1; i <= num; i++){
      sheepy.push(`${i} ${str}...`)
    }
      return sheepy.toString().replace(/,/g, '')
    }
    
  }

//   test 
//   countSheep(0), "");
// countSheep(1), "1 sheep...");
// countSheep(2), "1 sheep...2 sheep...");
// countSheep(3), "1 sheep...2 sheep...3 sheep...");