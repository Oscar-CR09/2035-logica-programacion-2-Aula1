let numeroSecreto = 0;
let intentos = 0;


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
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto 

        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
 
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja, 
    limpiarCaja();
    //indicar el mensaje de intervalo de numeros,
    // generar el numero aleatorio, 
    // iniciar intentos 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego

 
}

condicionesIniciales();