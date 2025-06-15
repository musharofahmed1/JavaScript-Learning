// Destructuring is a shortcut way to extract values from objects or arrays
// and assign them to variables in a single line.
// Here, we're extracting 'name' and 'age' from the 'person' object.

//obj Destructuring
const person = {
    name: "Musa",
    age: 25,

};

const {name:personName,age} = person
console.log(age)
console.log(personName)

//array Destructuring
const numbers = [23, 45];
const [first, last] = numbers;
console.log(first)

const [num1, num2] = [20,12];
console.log(num1)

//in a function

function makeDouble(n1,n2){
    return [n1*2,n2*2];
}

const [a,b] =makeDouble(12,2)
console.log(a)