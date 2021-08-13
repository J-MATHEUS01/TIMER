const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function getTimer(segundos) {
    let data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-br', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
    
}


let timer;
let segundos = 0;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        const tresHoras = 60 * 60 * 3;
        relogio.innerHTML = getTimer(tresHoras + segundos);
    }, 1000);
   
}
function corIniciar(){
    relogio.classList.add('relogio');
    
}

function zerou() {
        clearInterval(timer);
}

function paused() {
    relogio.classList.add('paused')
}


iniciar.addEventListener('click', function (e) {
    zerou();
    iniciaRelogio();
    relogio.classList.remove('paused');
});

pausar.addEventListener('click', function (e) {
    zerou();
    paused();
});
zerar.addEventListener('click', function (e) {
    zerou();
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('paused');
});

