let pistola = document.querySelector('p#pistola')
let res = document.querySelector('div#res')
let repeatbtn = document.createElement('button')
repeatbtn.innerText = 'Proximo Round?'
let balas = []
let roja = 'Buckshoot'
let azul = 'Blank'

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

    res.innerHTML = "Novo round iniciado";
    res.style.backgroundColor = "#161316";


    if (res.contains(repeatbtn)) {
        res.removeChild(repeatbtn);
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
    
    balas.shift();
}
repeatbtn.addEventListener('click' , repeat)
repeat()