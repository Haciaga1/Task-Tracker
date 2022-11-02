//'Elave et' butonuna hover veririk
let button = document.querySelector('.elave-et')
let buttonPlus = document.querySelector('.elave-et div')

button.addEventListener('mouseover',buttonHover)
button.addEventListener('mouseout', buttonHover2)

function buttonHover(){
    buttonPlus.style.backgroundColor='#AA68FE'
    button.style.backgroundColor='#9953F1'
}
function buttonHover2(){
    buttonPlus.style.backgroundColor='#9953F1'
    button.style.backgroundColor='#833AE0'
}

//'Elave et' butonuna basdiqda elave text-line yaradir
let buttonElaveEt = document.querySelector('.elave-et')
buttonElaveEt.addEventListener('click',elaveTextLineYarat)
function elaveTextLineYarat(){
    let newInput = document.createElement('div')
    let inputConatiner = document.querySelector('.input-container')
    newInput.innerHTML+='<input type="text" class="input"><button type="button" class="x-button"><i class="fa-solid fa-circle-xmark"></i></button>'
    inputConatiner.append(newInput)
}



