//uses Of spread Operator
const numbers = [10,15,20,45,25,30];
console.log(Math.max(...numbers))

//use spread operator to copy
const friends = [10,5,15,20];
const bondhu = [...friends];
bondhu.push(12);


console.log(friends)
console.log(bondhu)

//spread operator diye copy korle reference doree rakee na

//add extra element while coping
const sonka = [...friends,88];
console.log(sonka )

//can copy obj/array using spread operator
