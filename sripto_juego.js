let pistola = document.querySelector('p#pistola')
let res = document.querySelector('div#res')
let balas = []
let roja = 'Buckshoot'
let azul = 'Blank'

for (i = 1; i <= 3; i++) {
    balas.push(roja)
}
for (i = 1; i <=3; i++) {
    balas.push(azul)
}

function shuffle(array) {
    for(let i = array.length -1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1))

        [array[i], array[random]] = [array[random], array[i]]
    }
}
shuffle(balas)

function resultado() {
     if (balas.length === 0) {
        res.innerHTML = "Acabaram as balas";
        res.style.backgroundColor = "gray";
        return;
    }

    if (balas[0] === roja) {
        res.innerHTML = "tiro"
        res.style.backgroundColor = "red"

    } else {
        res.innerHTML = "vazia"
        res.style.backgroundColor = "blue"
    }
    
    balas.shift();
}