let calculation = []
let display = document.querySelector('#display')
let lightBGC = document.querySelector('#light')
let darkBGC = document.querySelector('#dark')
let container = document.querySelector('#container')

function operation(value){
    calculation += value
    display.value = calculation
}

function del(){
    if(calculation != ""){
        arrNumbers = calculation.split('')
        arrNumbers.pop()
        calculation = arrNumbers.join('')
        display.value = calculation
    }else{
        display.value = "Empty"
    }
}

function equals(){
    calculation=eval(calculation)
    display.value = calculation
    calculation = ''
}

function clr(){
    display.value = ''
    calculation = ''
}

function light(){
    lightBGC.style.display = 'none'
    darkBGC.style.display = 'inline'
    container.style.backgroundColor = 'white'
}
function dark(){
    lightBGC.style.display = 'inline'
    darkBGC.style.display = 'none'
    container.style.backgroundColor = 'black'
}