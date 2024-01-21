let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNúmerosSorteados = [];
let númeroMaximo = 10;
console.log(numeroSecreto)


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        /*El usuario no acertó.*/
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*númeroMaximo)+1;
    //Si ya sorteamos todos los números
    if( listaNúmerosSorteados.length == númeroMaximo ){
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles');
    } else {    
        /*Si el número generado esta incluido en la lista  */
        if (listaNúmerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNúmerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${númeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();