"use strict";

let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;

let tempo;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    tempo = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(tempo);
}

function reset() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('milissegundos').innerText = '000';
}

function timer() {
    if ((milissegundos += 10) == 1000) {
        milissegundos = 0;
        segundos++;
    }
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }
    document.getElementById('horas').innerText = returnData(horas);
    document.getElementById('minutos').innerText = returnData(minutos);
    document.getElementById('segundos').innerText = returnData(segundos);
    document.getElementById('milissegundos').innerText = returnData(milissegundos);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}