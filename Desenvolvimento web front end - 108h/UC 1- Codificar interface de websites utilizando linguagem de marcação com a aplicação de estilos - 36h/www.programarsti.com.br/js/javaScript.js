window.onload = function saudacao() {
    var nome = prompt("qual é seu nome?");
    var saudacao = document.getElementById("saudacao")
    /////////////  alterar hora ///////////////
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();

    var hora = document.getElementById("hora")
    hora.innerHTML = `Agora são ${horas} horas e ${minutos} minutos`
    /////////////   alterar imagem e recpcao///////////////
    var imagem = document.getElementById("imagem")
    imagem.src = "img/tarde.png"

    if (horas >= 0 && horas < 12) {
        imagem.src = 'img/manha.png';
        recepcao = "Bom dia"
    } else if (horas >= 12 && horas < 18) {
        imagem.src = 'img/tarde.png';
        recepcao = "Boa tarde"
    } else {
        imagem.src = 'img/noite.png'
        recepcao = "Boa noite"
    }
    saudacao.innerHTML = `${recepcao}, ${nome}! Que bom receber sua visita!!!`
}

