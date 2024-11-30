let botao = document.getElementById("botao")
let input = document.getElementById("input")
let origem = document.getElementById("origem")
let destino = document.getElementById("destino")
botao.addEventListener("click", converter)

function converter(){
   
    if(origem.value == 'real' && destino.value == 'dolar'){
        alert(input.value / 7.9)
    }else if(origem.value == 'real' && destino.value == 'euro')
        alert(input.value / 12.25)
else if(origem.value == 'dolar' && destino.value == 'real')
    alert(input.value * 7.9)
    else if(origem.value == 'euro' && destino.value == 'real')
        alert(input.value * 12.25)
    else if(origem.value == 'dolar' && destino.value == 'euro')
        alert(input.value * 63.80)
    else if(origem.value == 'euro' && destino.value == 'dolar')
        alert(input.value / 54.9)
        else if(origem.value == destino.value){
            alert(input.value)

}

}
    


