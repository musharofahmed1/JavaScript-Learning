//for of used on array and string
//for in used in object

const numbers = [11,2,3,4]

//for of
for (const num of numbers){
    console.log(num);
}

const myName = "Musharof Musa";
for(const char of myName){
    console.log(char);
}

//for in
const glass ={
    name: "glass",
    color: "White",
    price: 12,
    isClean: true
};

for(const key in glass){
    const values = glass[key];
    console.log(key,values);
}

//optional
const keys = Object.key(glass);
console.log(keys);

for(const key of keys){
    console.log(key);
}