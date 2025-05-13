//basic array
const numbers = [1,2,23,34,34,33,23];
//set index value
numbers[2] = 111;

//push function
numbers.push(112);
numbers.push(112,44,433)

//get size
console.log(numbers.length)

//pop function

const out1 = numbers.pop()

//printing array
console.log(numbers)

//get index 2 value
console.log(numbers[2])

//unshift function for add element from starting index
numbers.unshift(1000);
console.log(numbers)

//shift function for remove element on starting index
numbers.shift();
console.log(numbers)

//includes function
console.log(numbers.includes(17)) // false

console.log(numbers.includes(112)) // true

//indexOf function
console.log(numbers.indexOf(33)) // shows the index

console.log(numbers.indexOf(333)) // the value is not at array, so ans is -1 (false)

//array check "isArray" function use
const age = 12;
const ages = [];
console.log(Array.isArray(age)) // boolean output
console.log(Array.isArray(ages)) 

//combing array
const arrayOne = [6,7,8];
const arrayTwo = [9,10,11]

console.log(arrayOne.concat(arrayTwo))