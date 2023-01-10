// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// solution
// function nextId(ids){
//     //this will be awesome!

//     // First run a loop for each Number
//     // then, if their is a difference in the values within the loop, I will return the digit 
//     // if not I will add the number to the largest digit
//     for (id in ids){
//         for (let i=0; i < ids[ids.length - 1]; i++){
//             if (id != i){
//                 return i
//             }else{
//                 return ids[ids.length -1] + 1
//             }
//         }
//     }
//     return 0;
//   }


//  actual solution
  function nextId(ids){
    for(i = 0; i <= ids.length; i++) {
      if(ids.includes(i) != true) {
        return i;
      }
    }
  }