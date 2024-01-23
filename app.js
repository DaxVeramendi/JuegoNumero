
let numeroSecreto;
let numIntentos;
let listaNumerosSecretos = [];
let numMaximo = 3;

function asignarTexto(elemento, texto) {
    let textoAsignado = document.querySelector(elemento);
    textoAsignado.innerHTML = texto;
    return null;
}

function verificarIntento() {
    numIntentos++;

    let numeroUsuario = parseInt(document.getElementById(`numeroIngresado`).value);
    if (numeroUsuario === numeroSecreto) {
        asignarTexto(`p`, `Acertaste con el numero secreto en ${numIntentos} ${numIntentos === 1 ? "intento" : "intentos"}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
        document.querySelector(`#verificar`).setAttribute(`disabled`, true);//cambio
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTexto(`p`, `El numero secreto es mas grande`);
        } else if (numeroUsuario > numeroSecreto){
                asignarTexto(`p`, `El numero secreto es mas pequeño`);
            } else{
                asignarTexto(`p`, `No hay un numero secreto`);
                numIntentos--;
            }
        limpiarCaja();
    }
    return null;
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);
    if (listaNumerosSecretos.length == numMaximo) {
        asignarTexto(`p`, `Felicitaciones usted a terminado el juego por completo`);
        document.querySelector(`#reiniciar`).setAttribute(`disabled`, true);
    } else if (listaNumerosSecretos.includes(numeroGenerado)) {
        return generarNumSecreto();
    } else {
        listaNumerosSecretos.push(numeroGenerado);
        return numeroGenerado;
    }

}

function limpiarCaja() {
    document.querySelector(`#numeroIngresado`).value = ``;
}

function nuevoJuego() {
    numIntentos = 0;
    document.getElementById(`verificar`).removeAttribute(`disabled`);//cambio
    asignarTexto(`h1`, `Adivina el numero secreto`);
    asignarTexto(`p`, `Indica un numero del 1 al ${numMaximo}`);
    numeroSecreto = generarNumSecreto();
    limpiarCaja();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, true);
}

nuevoJuego();