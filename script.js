const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-Conteudos");

for(let i=0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}

const imagensAleatorias = [
"Imgs/milho.jpg",
];

function getRandomIndex(max) {
return Math.floor(Math.random() * max);
}


function definirImagemAleatoria() {
const randomIndex = getRandomIndex(imagensAleatorias.length);
const randomImageUrl = imagensAleatorias[randomIndex];
document.body.style.backgroundImage = `url("${randomImageUrl}")`;
}

window.onload = definirImagemAleatoria;