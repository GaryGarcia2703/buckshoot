let res = document.querySelector('div#res')
let repeatbtn = document.createElement('button')
repeatbtn.innerText = 'Proximo Round?'
let escopeta = document.querySelector('div#escopeta')
let mano = document.querySelector('img#mano')

let balas = []
let jugadores = [] //Array de jugadores
let roja = 'Buckshoot'
let azul = 'Blank'

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
    res.style.backgroundColor = "#161316"


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

    // Adiciona o evento logo após criar o botão
    dispararle.addEventListener('click' , atirarnele)

    let dispararte = document.createElement('button')
    dispararte.id = 'dispararte'
    dispararte.textContent = 'Atirar em você'
    document.body.appendChild(dispararte)

    dispararte.addEventListener('click' , atiraremvoce)
    }
}
escopeta.addEventListener('click', opciones)

function atirarnele() {
    let imagemEscopeta = escopeta.querySelector('img') 
    // seleciona a imagem atual da escopeta
    imagemEscopeta.src = '../../img/escopetaP2.png'    
}

function atiraremvoce() {
    let  imagemEscopeta2 = escopeta.querySelector('img')
    imagemEscopeta2.src = '../../img/escopetaPP.png'
}

function resultado() {
    if (balas.length === 0) {
        res.innerHTML = "Acabaram as balas"
        res.style.backgroundColor = "gray"
        res.appendChild(repeatbtn)
        return
    }

    let imgdealer = document.querySelector('img#img-dealer')
    if (jugadores[0] === "j1") {
        imgdealer.src = 'img/manop2.png'
    } else {
        imgdealer.src = 'img/manop.png'
    }


    if (balas[0] === roja) {
        res.innerHTML = `💥 Tiro em ${jugadores[0]}!`
        res.style.backgroundColor = "red"
    } else {
        res.innerHTML = `🔵 Bala vazia em ${jugadores[0]}`
        res.style.backgroundColor = "blue"
    }

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
}

function marcador() {
    nextTurn() 
    let imgdealer = document.querySelector('img#img-dealer')
    if (jugadores[0] == "j1") {
        imgdealer.src = 'img/manop2.png'
    } else {
        imgdealer.src = 'img/manop.png'
    }

}





console.log("--- Rodada 1 ---")
console.log("Estado inicial:", jugadores) 
nextTurn()
console.log("Após nextTurn():", jugadores) 
console.log(`turno de: ${jugadores[0]}`) 


repeatbtn.addEventListener('click' , repeat)
repeat()