//can manupulate with TagName
const liCollection = document.getElementsByTagName('li')
console.log(liCollection)

for(const li of liCollection){
    console.log(li.innerText);
}


const allHeadings = document.getElementsByTagName('h1')

for(const heading of allHeadings){
    console.log(heading.innerText);
    console.log("Helllo World")
}

//can manupulate with ID
console.log(document.getElementById('heading').innerHTML);

//can manupulate with ID
console.log(document.getElementsByClassName('namesTitle'));

//for getting CSS ID
console.log(document.querySelectorAll('#country-title'));

//query selector all
const someLi = document.querySelectorAll('.fruits-cointainer li');

for(const li of someLi){
    console.log(li.innerText);
}

//only first element
console.log(document.querySelector('.fruits-cointainer li').innerHTML)

//can set css 
const testColorChange = document.getElementById('fruits-title');
testColorChange.style.backgroundColor = "lightblue";

//set attribute
const title = document.getElementById('fruits-title');
title.setAttribute('title', 'Tool Tip Set By Js')