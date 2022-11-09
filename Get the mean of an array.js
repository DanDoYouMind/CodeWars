/* INSTRUCTIONS:

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

// SOLUTION:

function getAverage(marks){
    let sumReports = marks.reduce((acc, c) => acc + c)
    let result = sumReports/marks.length
    return Math.floor(result)
  }