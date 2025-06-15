//function declaration
function add(x,y){
    return x + y;
}
console.log(`Addition is ${add(2,3)}`);

//function expression / anonimus function

const sub = function(num1,num2){
    return num1 - num2;
}
console.log(`Subtraction is ${sub(5,1)}`)

//arrow function
const mul = (a,b=1) => a * b;
console.log(`Multiply is ${mul(3,2)}`)

//single parameter -> Implecit Expre

const getAge = (person) => person.age;
const student = {name:'Musa', age: 25}
console.log(getAge(student))

//can use arrow function without ()

const doubleIT = num => num * 2;
console.log(doubleIT(2))

//No Parameter
const getPI = () => Math.PI;
console.log(getPI())

//large arrow function: if you want to return anything then you have to use return function
const doMath = (x,y,z) =>{
    //----------
    //----------
    //---------
    return 
}



