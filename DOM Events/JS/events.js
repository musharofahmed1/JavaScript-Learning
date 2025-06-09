//option 3
function makeRed(){
    document.body.style.backgroundColor = 'Red'
}

//option 3

const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

//option 4
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'Green'
})

//option 5
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'Goldenrod'
})

