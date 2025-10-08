var balas = []
var roja = "bala roja"
var azul = "bala azul"

var vidas_j1 = 3
var vidas_j2 = 3


for (let i = 0; i <= 3; i++) {
    balas.push(roja)
    balas.push(azul)
}

function embaralharArray(balas) {
    for (let i = balas.length - 1; i > 0; i--) {

        // Pega um índice aleatório de 0 até i
        const j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos de posição
        [balas[i], balas[j]] = [balas[j], balas[i]];
    }
    return balas;
}

console.log(`Antes: ${balas}`)
embaralharArray(balas)
console.log(`Depois ${balas}`)


let turno = 1; // 1 = jugador1, 2 = jugador2

var yobtn = document.querySelector("button#yo")
var otrobtn = document.querySelector("button#otro")

yobtn.addEventListener("click", () => disparar("yo"));
otrobtn.addEventListener("click", () => disparar("otro"));


function disparar(quien) { 
        if (balas.length === 0) {
            alert("¡El revolver se quedó sin balas! Recarga para continuar.");
            return;
        }

        if (quien == yobtn) { // se dispara a sí mismo
            if (balas[0] === "bala roja") {
                console.log("Jugador 1 se disparó y perdió una vida!");
                vidas_j1--;
                turno = 2; // pasa turno al otro
            } else {
                console.log("Jugador 1 se disparó y estaba vacío. Gana otro turno!");
                // NO cambias turno aquí, sigue jugador 1
            }
        } 


        if (otrobtn) { // dispara al oponente
            if (balas[0] === "bala roja") {
                console.log("Jugador 1 disparó al Jugador 2 y acertó!");
                vidas_j2--;
                turno = 2; // pasa turno
            } else {
                console.log("Jugador 1 disparó al Jugador 2 pero estaba vacío!");
                turno = 2; // pasa turno
            }
        }

    console.log(`Vidas -> J1: ${vidas_j1} | J2: ${vidas_j2}`);
}

disparar(yobtn , otrobtn)
