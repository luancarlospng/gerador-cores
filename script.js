var container = document.querySelector('.container');

var botao = document.querySelector('#btn');

var textoCor = document.querySelector('#cor');

function gerarCor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    container.style.backgroundColor = `rgb(${r},${g},${b})`;

    textoCor.innerHTML = `RGB(${r},${g},${b})`;
}


botao.addEventListener('click',gerarCor);
