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

//Final option 1
function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status')
    handlerStatus.innerText = 'Handled By Function attached onclick attribute'
}

//Final option 2
document.getElementById('event-listener').addEventListener('click',function(){
    const handlerstatus = document.getElementById('handler-status');
    handlerstatus.innerText = 'Text Updated By add Event Listener';
})


//option 2 recap

document.getElementById('btn-update').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value

    const p = document.getElementById('input-text-display')
    p.innerText = inputText;
   inputText.value = '';
})
