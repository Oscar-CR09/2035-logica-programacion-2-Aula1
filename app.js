
function asignarTextoElemento(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML=texto;

}
function intentoDeUsuario(){
    alert('Click desde el boton');
}


asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 10');