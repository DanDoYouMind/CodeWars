/* INSTRUCTIONS:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/

//SOLUTION:

function removeEveryOther(arr){
    let removedStr = []
    for(var i = 0; arr.length > i; i++){
     if(i % 2 == 0){
       removedStr.push(arr[i])
     }
    }
   return removedStr
  }