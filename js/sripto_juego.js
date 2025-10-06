// === ELEMENTOS DO DOM ===
let res = document.querySelector('div#res');
let escopeta = document.querySelector('div#escopeta');
let mano = document.querySelector('img#mano');

// botão criado desde o início 
let repeatbtn = document.createElement('button');
repeatbtn.innerText = 'Proximo Round?';

// === VARIÁVEIS DE ESTADO / JOGO ===
let balas = [];
let jugadores = ["j1", "j2"];
let jugadorActual = jugadores[0]; // jogador atual
let alvoAtual = null;
let tipoDeBalaAtual = null;

// VIDA dos jogadores
let vidas_j1 = 3;
let vidas_j2 = 3;

// === CONSTANTES DE TIPO DE BALA ===
let roja = 'Buckshoot';
let azul = 'Blank';

// === FUNÇÕES ===
function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}

function repeat(resetVidas = false) {
    // Resetar vidas apenas se necessário
    if (resetVidas) {
        vidas_j1 = 3;
        vidas_j2 = 3;
    }

    // Reinicia balas
    balas = [];
    for (let i = 0; i < 3; i++) balas.push(roja);
    for (let i = 0; i < 3; i++) balas.push(azul);
    shuffle(balas);

    // Reinicia turno
    jugadores = ["j1", "j2"];
    jugadorActual = jugadores[0];
    alvoAtual = null;
    tipoDeBalaAtual = null;

    res.innerHTML = "Novo round iniciado";
    res.style.backgroundColor = "transparent";

    if (res.contains(repeatbtn)) res.removeChild(repeatbtn);

    atualizarVidas();
    console.log(`🔄 Round reiniciado — Vidas: J1=${vidas_j1}, J2=${vidas_j2}`);
    console.log(`🔫 Turno de início: ${jugadorActual}`);
}

function opciones() { /// aqui eleminaremos los dos botones y solamente agarraremos lasa img de la escopeta
    if (!document.getElementById('dispararle') && !document.getElementById('dispararte')) {
        let dispararle = document.createElement('button');
        dispararle.id = 'dispararle';
        dispararle.textContent = 'Atirar nele';
        document.body.appendChild(dispararle);
        dispararle.addEventListener('click', () => disparar('Enemy'));

        let dispararte = document.createElement('button');
        dispararte.id = 'dispararte';
        dispararte.textContent = 'Atirar em você';
        document.body.appendChild(dispararte);
        dispararte.addEventListener('click', () => disparar('Ami'));
    }
}

escopeta.addEventListener('click', opciones);

function disparar(tipoDeAlvo) {
    document.getElementById('dispararte')?.remove();
    document.getElementById('dispararle')?.remove();

    // Determina quem leva o tiro
    if (jugadorActual === 'j1') {
        alvoAtual = tipoDeAlvo === 'Ami' ? 'j1' : 'j2';
    } else {
        alvoAtual = tipoDeAlvo === 'Ami' ? 'j2' : 'j1';
    }

    // Atualiza a imagem da escopeta de acordo com o alvo
    let armaimg = document.querySelector('img#escopeta');
    armaimg.src = alvoAtual === 'j1' ? '../../img/escopetaPP.png' : '../../img/escopetaP2.png';

    resultado();
}

function resultado() {
    res.innerHTML = '';
    let imgdealer = document.querySelector('img#img-dealer');
    let resJugadorActual = document.querySelector('div#turnoJugador');
    resJugadorActual.innerHTML = '';

    // Mostra o turno do jogador atual
    let turnoDelJugador = document.createElement('h3');
    turnoDelJugador.id = 'turno-jogador';
    turnoDelJugador.textContent = `🔄 Turno do jogador: ${jugadorActual}`;
    resJugadorActual.appendChild(turnoDelJugador);

    if (balas.length === 0) {
        let fim = document.createElement('p');
        fim.textContent = "Acabaram as balas";
        res.style.backgroundColor = "gray";
        res.appendChild(fim);
        res.appendChild(repeatbtn);
        return;
    }

    imgdealer.src = jugadorActual === "j1" ? 'img/manop2.png' : 'img/manoPP.png';

    tipoDeBalaAtual = balas[0];
    balas.shift();

    let resultadoTexto = document.createElement('p');
    resultadoTexto.id = 'tipoDeBala';
    if (tipoDeBalaAtual === roja) {
        resultadoTexto.textContent = '💥';
        res.style.backgroundColor = 'red';
    } else {
        resultadoTexto.textContent = '🔵';
        res.style.backgroundColor = 'blue';
    }
    res.appendChild(resultadoTexto);

    // Atualiza vidas e verifica morte
    const fimDeJogo = Vidas(alvoAtual, tipoDeBalaAtual);
    if (!fimDeJogo) nextTurn();
}

function nextTurn() {
    jugadores.push(jugadores.shift());
    jugadorActual = jugadores[1];
    console.log(`🔄 Agora é a vez de: ${jugadorActual}`);
}

function Vidas(alvo, tipoDeBala) {
    if (tipoDeBala === roja) {
        if (alvo === 'j1') {
            vidas_j2--;
            console.log(`💥 O jogador 2 levou um tiro! Vidas restantes: ${vidas_j2}`);
        } else if (alvo === 'j2') {
            vidas_j1--;
            console.log(`💥 O jogador 2 levou um tiro! Vidas restantes: ${vidas_j2}`);
        }
    }

    atualizarVidas();

    if (vidas_j1 <= 0 || vidas_j2 <= 0) {
        res.style.backgroundColor = 'black';
        res.innerHTML = vidas_j1 <= 0 ? "☠️ O Jogador 1 morreu!" : "☠️ O Jogador 2 morreu!";

        if (!res.contains(repeatbtn)) {
            res.appendChild(repeatbtn);
            repeatbtn.onclick = () => repeat(true); // reset vidas no próximo round
        }
        return true; // fim do jogo
    }

    return false;
}

function atualizarVidas() {
    let textoJ1 = 'j1'; // aqui eu nao achei um jeito de arrumar ja que no console mostra que o jogador alvo foi o j1 mas o dano e levado pro j2
    let textoJ2 = 'j2';

    for (let i = 1; i <= 3; i++) {
        textoJ1 += i <= vidas_j1 ? '❤️' : '🖤';
        textoJ2 += i <= vidas_j2 ? '❤️' : '🖤';
    }

    document.getElementById('vidas-j1').textContent = textoJ1;
    document.getElementById('vidas-j2').textContent = textoJ2;
}

// === INÍCIO DO JOGO ===
console.log("--- Rodada 1 ---");
console.log(`Turno inicial: ${jugadorActual}`);
repeatbtn.addEventListener('click', () => repeat(true));
repeat();
