let pistola = document.querySelector('p#pistola')
let res = document.querySelector('div#res')
let balas = []
let roja = 'Buckshoot'
let azul = 'Blank'

for (i = 1; i <= 3; i++) {
    balas.push(roja)
}
for (i = 1; 1<=3; i++) {
    balas.push(azul)
}

function shuffle(array) {
    for(let i = array.length -1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1))

        [array[i], array[random]] = [array[random], array[i]]
    }
}

function resultado() {
    res.innerHTML = `${balas}`
}