let input =document.querySelector('.input-in')
let btn = document.querySelector('.search-button')

let search = btn.onclick = function(){
    let val = input.value;
    let inputsItems = document.querySelectorAll('.accordion-body code');
    if (val !== ''){
        inputsItems.forEach(function (el) {
            if (el.innerText.search(val) === -1){
                el.classList.add('hide');
            }else{
                el.classList.remove('hide');
            }
        });
    }
    else {
        inputsItems.forEach(function (el) {
            el.classList.remove('hide');
        });
    }
}


input.addEventListener('keyup',(event) =>{
    if (event.key === 'Enter'){
        search()
    }
})