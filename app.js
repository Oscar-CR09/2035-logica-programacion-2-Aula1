let numeroSecreto = 0;
let intentos = 0;
let listaNuemrosSorteados = [];
let numeroMaximo =10;


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
    let nuemroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(nuemroGenerado);
    console.log(listaNuemrosSorteados);
    // si ya sorteamos todos los numeros

    if (listaNuemrosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        
    }else{
        //Si el numero generado esta incluido en la lista 
        if (listaNuemrosSorteados.includes(nuemroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(nuemroGenerado);
            return nuemroGenerado;
        }
    }
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
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
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

 
}

condicionesIniciales();