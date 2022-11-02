/*DESCRIPTION:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/


const binaryArrayToNumber = arr => {
total = 0
counter = 0
    for (i = arr.length -1; i >= 0 ; i--){
        
        val = arr[i]
        total += val*(2**counter)
        counter ++
    }
  return total;
  };

