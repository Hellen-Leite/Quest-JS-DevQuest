function alterarCorDeBorda(){
    const inputText= document.getElementsByClassName('required')
    const span= document.getElementsByClassName('span-required')
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i].value==""){
            inputText[i].classList.remove("borda-preta")
            inputText[i].classList.add("borda-vermelha")
            

            
        } else {
            inputText[i].classList.remove("borda-preta")
            inputText[i].classList.add("borda-verde")
        }

    for(let i=0; i<span.length; i++){
        if(inputText[i].value==""){
            span[i].classList.remove("span-required")
            span[i].classList.add("selecionado")
        }
        else{
            span[i].classList.remove("selecionado")
        }
    }
    }    
} 


