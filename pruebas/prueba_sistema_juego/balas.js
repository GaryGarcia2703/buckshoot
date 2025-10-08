let balas = []
let rojas = 'buckshot'
let azules = 'blank'
//variables

for (let i = 1; i <= 3; i++) {
    balas.push(azules)
}
for (let i = 1; i <= 3; i++) {
    balas.push(rojas)
}
console.log(`cartucho de balas original: ${balas}`);

function shuffle(array) {
    for(let i = array.length -1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1))

        [array[i], array[random]] = [array[random], array[i]]
    }
}

shuffle(balas)
console.log(`cartucho de balas barajeado: ${balas}`)