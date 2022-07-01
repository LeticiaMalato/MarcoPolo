let i=0 
let tentativa3
let tentativa2
let tentativa
let sorteio
sorteio = Math.floor(Math.random()*21)
// ir para o jogo
function facill(params) {
    
    window.location = "indexx.html"

}

function medioo(params) {
    
    window.location = "medio.html"

}

function dificill(params) {
    window.location = "dificil.html"
}
function comparar(params) {
    
    let result
    tentativa = document.getElementById("tentativa").value 
    tentativa = parseInt(tentativa)
    if (tentativa >= sorteio){
        result = document.getElementById("resp").innerHTML= "A sua aposta é maior que o número sorteado."
    }
    if (tentativa <= sorteio){
        result = document.getElementById("resp").innerHTML= "A sua aposta é menor que o número sorteado."
    }
    if (tentativa == sorteio){
        window.location = "vencedor.html"
        
    } 
    console.log(sorteio)
    //atualizar 
    i++
    if(i==5){
        window.location = "perdedor.html"
    
    }
 
}
// voltar para a tela inicial
function inicio() {
    window.location = "index.html"
}




function comparar2(params) {
    
    let result2
    tentativa2= document.getElementById("tentativa2").value 
    tentativa2= parseInt(tentativa2)
    if (tentativa2>= sorteio){
        result2 = document.getElementById("resp2").innerHTML= "A sua aposta é maior que o número sorteado."
    }
    if (tentativa2 <= sorteio){
        result2= document.getElementById("resp2").innerHTML= "A sua aposta é menor que o número sorteado."
    }
    if (tentativa2 == sorteio){
        window.location = "vencedor.html"
        
    } 
    console.log(sorteio)
    i++
    if(i==3){
        window.location = "perdedor.html"
    
    }
 
}

function comparar3(params) {
    let result3
    tentativa3= document.getElementById("tentativa3").value 
    tentativa3= parseInt(tentativa3)
    if (tentativa3>= sorteio){
        result3 = document.getElementById("resp3").innerHTML= "A sua aposta é maior que o número sorteado."
    }
    if (tentativa3 <= sorteio){
     result3= document.getElementById("resp3").innerHTML= "A sua aposta é menor que o número sorteado."
    }
    if (tentativa3 == sorteio){
        window.location = "vencedor.html"
        
    } 
    console.log(sorteio)
    i++
    if(i==1){
        window.location = "perdedor.html"
    
    }
}