/* INSTRUCTIONS: 
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0] */

// SOLUTION:

function smaller(arr) {
    let result = []
    for(let i = 0; arr.length > i; i++){
      let counter = 0
      for(let j = i+1; arr.length > j; j++){
        if(arr[i] > arr[j]){
          counter ++;
        }
      }
      result.push(counter)
    }
    return result
  }