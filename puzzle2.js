/*
Rules of Puzzle 2
Puzzle input contains rows of numbers
Row is valid if each number differs from the one before or after it by at least 1 and
only differ in difference by at most 3

76421 is valid
12789 is not valid
*/

const fs = require('fs');
const path = require('path');

function readFileLines() {
  const filePath = path.join(__dirname, 'puzzle2Input.text');
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');
  return lines;
}

const lines = readFileLines();


let total = 0;
for (let i = 0;i<lines.length;i++) {
  let line = lines[i];
  console.log(line);
}

//array is created called lines that includes file data. It's in an array format.
//each group needs to be evaluated. 
//so grab each bit of the array, make it an array of it's own and do a for loop on it.
//contain this all in it's own for loop to go though the lines array.