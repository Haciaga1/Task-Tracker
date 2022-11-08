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

//'Elave et' butonuna basdiqda metni list -e elave edir
let list = document.querySelector('.drag-drop-area')
let input = document.querySelector('input')
let text;

elaveEtButton= document.querySelector('.elave-et')
elaveEtButton.addEventListener('click',()=>{
    let newLI = document.createElement('div')
    newLI.classList.add('parent-li')
    text=input.value
    newLI.innerHTML+=`<li>${text}</li><button id="list-x" type="button" class="li-x-button"><i class="fa-solid fa-circle-xmark"></i></button>`
    //Eger input-u bos buraxib 'Elave et' duymesine basdiqda error mesaji cixardir
    if(input.value==0){
        alert('Boş mətin daxil etmək olmaz!')
    }
    else{
        list.append(newLI)
    }
    input.value=null;

    //Listde olan x butonuna basdiqda hemin metni listden silir
    let listX = document.querySelectorAll('#list-x')
        listX.forEach(item => {
            item.addEventListener('click',()=>{
                item.parentElement.remove()
            })
        })
    })
    
//Input -un x butonuna basdiqda input.value ni silir
let inputX = document.querySelector('#input-x')
inputX.addEventListener('click',()=>{
    input.value=null;
})

//Sort List
let asc=true;
let sortButton = document.querySelector('.sort-button')
let sortIcon = document.querySelector('#sort-icon')
sortButton.addEventListener('click',()=>{
    sortIcon.classList.toggle('fa-arrow-up-short-wide')
    let listArr=[];
    for(let i=0; i<list.childElementCount; i++){
        listArr[i]=list.children[i].childNodes[0].childNodes[0].nodeValue;
    }
    //Daxil etdiyimiz ilk 
    if(isNaN(listArr[0])){
        listArr.sort()
        if(asc==true){
            for(let i=0; i<list.childElementCount; i++){
                list.children[i].childNodes[0].childNodes[0].nodeValue=listArr[i]
            }
            asc=false;
        }
        else if(asc==false){
            listArr=listArr.reverse()
            for(let i=0; i<list.childElementCount; i++){
                list.children[i].childNodes[0].childNodes[0].nodeValue=listArr[i]
            }
            asc=true;
        }
    }
    else if(!isNaN(listArr[0])){
        listArr.sort((a,b)=>{
            return a-b;
        })
        if(asc==true){
            for(let i=0; i<list.childElementCount; i++){
                list.children[i].childNodes[0].childNodes[0].nodeValue=listArr[i]
            }
            asc=false;
        }
        else if(asc==false){
            listArr=listArr.reverse()
            for(let i=0; i<list.childElementCount; i++){
                list.children[i].childNodes[0].childNodes[0].nodeValue=listArr[i]
            }
            asc=true;
        }
    }
    
})

// Drag drop
const dragArea = document.querySelector('.drag-drop-area')
new Sortable(dragArea, {
    animation: 250

})
