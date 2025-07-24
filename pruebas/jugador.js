let jugadores = []
let j1 = "j1"
let j2 = "j2"

jugadores.push(j1)
jugadores.push(j2)

function nextTurn() {
    if (jugadores[0] == j1) {
        jugadores.shift()
        jugadores.push(j1)
    } else {
        jugadores.shift()
        jugadores.push(j2)
    }
}

console.log("--- Rodada 1 ---")
console.log("Estado inicial:", jugadores) // [ 'j1', 'j2' ]
nextTurn()
console.log("Após nextTurn():", jugadores) // [ 'j2', 'j1' ]
console.log(`turno de: ${jugadores[0]}`) // turno de: j2

console.log("\n--- Rodada 2 ---")
nextTurn()
console.log("Após nextTurn():", jugadores) // [ 'j1', 'j2' ]
console.log(`turno de: ${jugadores[0]}`) // turno de: j1

console.log("\n--- Rodada 3 ---")
nextTurn()
console.log("Após nextTurn():", jugadores) // [ 'j2', 'j1' ]
console.log(`turno de: ${jugadores[0]}`) // turno de: j2