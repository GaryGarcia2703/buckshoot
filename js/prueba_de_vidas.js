

var jugador1 = "j1";
var jugador2 = "j2";

while(vidas_j1 > 0 && vidas_j2 > 0) {
    let escolha = confirm("Escolha 'Ok' para atirar em você, e 'Cancelar' para atirar no oponente");

    if (escolha) {
        console.log("Bala atirada em você!");
        vidas_j1--; 
        console.log("Vidas J1:", vidas_j1);
    } else {
        console.log("Bala atirada no oponente!");
        vidas_j2--;
        console.log("Vidas J2:", vidas_j2);
    }

    // Comprobamos si alguien murió
    if (vidas_j1 == 0) {
        alert("O jogador 1 morreu!");
    } else if (vidas_j2 == 0) {
        alert("O jogador 2 morreu!");
    }
}
