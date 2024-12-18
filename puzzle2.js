/*
Rules of Puzzle 2
//in each set of numbers, check if the difference between each number is more than 3
//if it is more than 3, then it is not valid
//if it is less than 1 then it is not valid.
//numbers must increase or decrease by at least 1 thoughout the set
//if numbers increase and decrease in set then it is not valid.

76421 is valid
12789 is not valid
98999 is not valid
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


let total = lines.length;
let arrayItemCheck = [];
for (let i = 0;i<lines.length;i++) {
  let initialDirection = null;
  //the above is out of the loop to ensure I can check each item in the array.
  let line = lines[i];
 let arrayItemCheck = line.split(' ').map(Number);
 
//console.log(arrayItemCheck.length);  
for (let j = 1;j<arrayItemCheck.length;j++) {
  let firstNumber = arrayItemCheck[j-1];
  let secondNumber = arrayItemCheck[j];
  if (Math.abs(firstNumber - secondNumber) <= 3 && Math.abs(firstNumber - secondNumber) >= 1) {
    let currentDirection = null;
        }
        else {
          total--;
          break;
        }
        if (firstNumber > secondNumber){
          currentDirection = 'decrease';
        } else if (firstNumber < secondNumber) {  
          currentDirection = 'increase';
        } else{
          total--;
          break;
        } if (initialDirection===null){
          initialDirection = currentDirection
    } else if (initialDirection !== currentDirection) {
      total--;
      break;
    }
  }
} 
console.log(total);