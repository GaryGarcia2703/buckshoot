
let res = document.querySelector('div#res')
let repeatbtn = document.createElement('button')
repeatbtn.innerText = 'Proximo Round?'
let escopeta = document.querySelector('div#escopeta')
let mano = document.querySelector('img#mano')

let balas = []
let jugadores = [] //Array de jugadores
let roja = 'Buckshoot'
let azul = 'Blank'

let cartuchoAtual = true

jugadores.push("j1")
jugadores.push("j2")

function shuffle(array) {
    for(let i = array.length -1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1))

        let temp = array[i]
        array[i] = array[random]
        array[random] = temp
    }
}

function repeat() {
    balas = []
    for (let i = 1; i <= 3; i++) {
        balas.push(roja)
    }
    for (let i = 1; i <=3; i++) {
        balas.push(azul)
    }
    shuffle(balas)
    console.log(`balas embaralhadas ${balas}`)

    res.innerHTML = "Novo round iniciado"

    if (res.contains(repeatbtn)) {
        res.removeChild(repeatbtn)
    }

}

function opciones() {
    if (!document.getElementById('dispararle') && !document.getElementById('dispararte')) {

        let dispararle = document.createElement('button')
        dispararle.id = 'dispararle'
        dispararle.textContent = 'Atirar nele'
        document.body.appendChild(dispararle)

        dispararle.addEventListener('click', () => disparar('Enemy'))

        let dispararte = document.createElement('button')
        dispararte.id = 'dispararte'
        dispararte.textContent = 'Atirar em você'
        document.body.appendChild(dispararte)
        
        dispararte.addEventListener('click', () => disparar('Ami'))
    }
}

escopeta.addEventListener('click', opciones)

function disparar(tipoDeAlvo) {
    //remove o botão quando selecionado
    document.getElementById('dispararte')?.remove()
    document.getElementById('dispararle')?.remove()
    let alvoReal
    let armaimg = document.querySelector('img#escopeta')

    if (jugadorActual === 'j1'){
        if (tipoDeAlvo === 'Ami') {
            alvoReal = 'j1'
            armaimg.src = '../../img/escopetaP2.png'
        } else {
            alvoReal = 'j2'
            armaimg.src = '../../img/escopetaPP.png'
        }
    } else {
        if (tipoDeAlvo === 'Ami' ){
            alvoReal = 'j2'
            armaimg.src = '../../img/escopetaPP.png'
        } else {
            alvoReal = 'j1'
            armaimg.src = '../../img/escopetaP2.png' 
        }
    }
resultado()
}


function resultado() {
    let imgdealer = document.querySelector('img#img-dealer') // A mão aponta pro jogador atual

    let resJugadorActual = document.querySelector('div#turnoJugador')
    resJugadorActual.innerHTML = ''

    

    // Cria e exibe o turno do jogador
    let turnoDelJugador = document.createElement('h3')
    turnoDelJugador.id = 'turno-jogador'
    turnoDelJugador.textContent = `🔄 Turno do jogador: ${jugadorActual}`
    resJugadorActual.appendChild(turnoDelJugador)

    // Verifica se acabaram as balas
    if (balas.length === 0) {
        let fim = document.createElement('p')
        fim.textContent = "Acabaram as balas"
        res.style.backgroundColor = "gray"
        res.appendChild(fim)
        res.appendChild(repeatbtn)
        return
    }

    // Atualiza a imagem da mão do dealer
    if (jugadorActual === "j1") {
        imgdealer.src = 'img/manop2.png'
    } else {
        imgdealer.src = 'img/manoPP.png'
    }

    // Resultado do tiro
    let resultadoTexto = document.createElement('p')
    if (balas[0] === roja) {
        resultadoTexto.textContent = `💥 Tiro em ${jugadorActual}!`
        res.style.backgroundColor = "red"
    } else {
        resultadoTexto.textContent = `🔵 Bala vazia em ${jugadorActual}`
        res.style.backgroundColor = "blue"
    }
    res.appendChild(resultadoTexto)

    balas.shift()        // remove a bala usada
    nextTurn()     
}


function nextTurn() {
        if (jugadores[0] == "j1") {
            jugadores.shift()
            jugadores.push("j1")
        } else {
            jugadores.shift()
            jugadores.push("j2")
        }
        console.log(`Agora é a vez de: ${jugadores[0]}`)
        jugadorActual = jugadores[0] // Atualiza el jugador actual
}


console.log("--- Rodada 1 ---")
console.log("Estado inicial:", jugadores) 
nextTurn()
console.log("Após nextTurn():", jugadores) 
console.log(`turno de: ${jugadores[0]}`) 


repeatbtn.addEventListener('click' , repeat)
repeat()