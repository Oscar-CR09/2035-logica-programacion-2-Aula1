let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


function asignarTextoElemento(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`,`acertaste el numero ${intentos} ${(intentos===1?'vez':'veces')}`);
    }else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
    }
 
    return;

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 10');