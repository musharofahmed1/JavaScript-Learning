//Basic Function

function add(num1, num2){
    const result = num1 + num2;
    console.log(num1,num2, result);
    return result;
}
const sum = add(2,1);

//default value in function
//In JavaScript, default parameters allow you toassign a default value to a function
//  parameter if no value (or undefined) is passed.

//Default parameters are used only when the argument is undefined.
//If you explicitly pass null, it will not use the default value.

//When to Use:To avoid undefined values in function logic
//To create more flexible and cleaner APIs

//example
function add2(num1, num2=0){
    const result = num1 + num2;
    console.log(num1,num2, result);
    return result;
}
const sum2 = add2(2);

//example
function yourName(firstName, lastName=''){
    const fullName = firstName + '' + lastName;
    console.log(fullName);
    return fullName;
}

const x = yourName("Musa")

//example 
function friends(numbs=[]){

}

//example 
function person(human = {}){
    
}
