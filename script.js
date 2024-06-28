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

//function comprar() {
//const width= 800;
//const height= 600;
//const left= (screen.width / 2)- (width / 2);
//const top= (screen.heigth / 2)- (height / 2);
//window.open ('cadastro.html' , 'pagamento' , 'width=${width},height=${height}, top=${top}, left=${left}');
//}