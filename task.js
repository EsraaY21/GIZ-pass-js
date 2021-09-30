// SORTING ALGORITHM
const numbers = [5, 8, 0, 1, 9, 11, 15, 16];
// change the numbers array from let to const because the original numbers array should be immutable const numbers = [5, 8, 0, 1, 9, 11, 15, 16]

// use functions to sort the numbers to prevent repeated code (DRY Code) and to return a new array instead of changing the original one and to make the code more reusable
const ascSort = (originalNumbers) => {
  let numbers = [...originalNumbers];
  for (let i = 0; i < numbers.length - 1; i++) {
    // i < numbers.length - 1 instead of i < numbers.length because we don't compare the last number in the array with another number
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      // j < numbers.length - 1 - i instead of j < numbers.length - 1 because for every iteration the biggest number is already sorted
      if (numbers[j] > numbers[j + 1]) {
        // numbers[j] > numbers[j+1] instead of numbers[i] > numbers[j + 1] because the inner loop is for j so i only changes after the inner loop finishes
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        // [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]] instead of the temp method to have shorter and easier code
      }
    }
  }
  return numbers;
};

const descSort = (originalNumbers) => {
  let numbers = [...originalNumbers];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] < numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
};

const ascendingNumbers = ascSort(numbers);
console.log('Numbers list After Asc sorting: ', ascendingNumbers);

const descendingNumbers = descSort(numbers);
console.log('Numbers list After Desc sorting: ', descendingNumbers);

console.log('Original numbers list: ', numbers);

// ***********************
// Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt

// Include fs module
const fs = require('fs');

// Calling the readFileSync() method to read 'data.txt' file
const numbersDataString = fs.readFileSync('./data.txt', {
  encoding: 'utf8',
  flag: 'r',
});

var numbersDataArray = numbersDataString.split(',').map(function (item) {
  return parseInt(item, 10);
});

const ascendingnumbersDataArray = ascSort(numbersDataArray);

fs.writeFileSync('output.txt', ascendingnumbersDataArray.toString());
