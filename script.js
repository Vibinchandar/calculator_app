`use strict`;

const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const deleteEl = document.getElementById('delete')
let result = document.getElementById('answer')
const displayevent = document.getElementById('numbers')

displayevent.addEventListener('click',(e) =>{
    renew =  e.target.innerText
    result.value =  result.value+renew
})
equal.addEventListener('click',()=>{
    try{
        result.value = eval(result.value)
        if(eval(result.value) === Infinity){
            result.value = 'Math error'
        }else{
            result.value = eval(result.value)
        }
    }
    catch(ex){
        result.value = 'Math Error'
    }
})
clear.addEventListener('click',()=>{
    result.value = ''
})
deleteEl.addEventListener('click',()=>{
    result.value = result.value.slice(0,-1)
})


