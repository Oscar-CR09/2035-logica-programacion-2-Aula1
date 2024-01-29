let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p','acertaste el numero');
    }else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
    }
 
    return;

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 10');