let escopeta = document.querySelector('div#escopeta')
let mano = document.querySelector('img#mano')
let res = document.querySelector('div#res')

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
    let imagemEscopeta2 = escopeta.querySelector('img')
    imagemEscopeta2.src = '../../img/escopetaPP.png'
}
