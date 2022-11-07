/* INSTRUCTIONS:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

//SOLUTION:

function isogram(str){
    if(str === ''){
        return true;
    }
    
    let totalLetters = []
    strArr = str.toLowerCase().split('')
    let result = true;


    strArr.forEach(letter => {
        if(totalLetters.indexOf(letter) == -1){
            totalLetters.push(letter)
        }
        else{
            result = false;
        }
        
    })
    return result;
}