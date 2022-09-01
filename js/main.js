window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function Calcular(peso, altura) { 
    
    peso =  document.getElementById('peso').value
    altura =  document.getElementById('altura').value
    resultado = peso /( altura * altura)
     if(resultado<=18.5){
         return document.querySelector('#resultado').innerHTML = ("você esta abaixo do peso normal, seu imc atual é: "+resultado)
     }else if(resultado<=24.9){
         return document.querySelector('#resultado').innerHTML = ("você esta com o peso normal, seu imc atual é: "+resultado)
     }else if(resultado <= 29.9){
         return document.querySelector('#resultado').innerHTML = ("você esta com excesso de peso, seu imc atual é: "+resultado)
     }else if(resultado <= 34.9){
         return document.querySelector('#resultado').innerHTML = ("você esta com obessidade I, seu imc atual é: "+resultado)
     }else if(resultado <= 39.9){
         return document.querySelector('#resultado').innerHTML = ("você esta com obessidade I, seu imc atual é: "+resultado)
     }else if(resultado >= 40.0){
         return document.querySelector('#resultado').innerHTML = ("você esta com obessidade I, seu imc atual é: "+resultado)
     }
     //return document.querySelector('#resultado').innerHTML = resultado
 }


