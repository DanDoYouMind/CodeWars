/* INSTRUCTIONS:
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

// SOLUTION:

var capitals = function (word) {
    let arr = word.split('')
  
  let total = []
  arr.filter((val, index)=>{
    if(val == val.toUpperCase()){
      total.push(index)
    }
  })
  return total};
  