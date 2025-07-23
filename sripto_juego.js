let res = document.querySelector('div#res')
let repeatbtn = document.createElement('button')
repeatbtn.innerText = 'Proximo Round?'

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

function resultado() {
     if (balas.length === 0) {
        res.innerHTML = "Acabaram as balas"
        res.style.backgroundColor = "gray"
        res.appendChild(repeatbtn)
        return
    }

    if (balas[0] === roja) {
        res.innerHTML = "💥 Tiro!"
        res.style.backgroundColor = "red"

    } else {
        res.innerHTML = "🔵 Vazia"
        res.style.backgroundColor = "blue"
    }
    
    balas.shift()
}

function nextTurn() {
        if (jugadores[0] == "j1") {
            jugadores.shift()
            jugadores.push("j1")
        } else {
            jugadores.shift
            jugadores.push("j2")
        }
        console.log(`Agora é a vez de: ${jugadores[0]}`)
}

console.log("--- Rodada 1 ---")
console.log("Estado inicial:", jugadores) 
nextTurn()
console.log("Após nextTurn():", jugadores) 
console.log(`turno de: ${jugadores[0]}`) 


repeatbtn.addEventListener('click' , repeat)
repeat()