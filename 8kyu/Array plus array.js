/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let ar1 = arr1.reduce((acc, c)=> acc + c)
    let ar2 = arr2.reduce((acc,c)=> acc + c)
    return ar1 + ar2
    
  }
