function alterar() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    var descricao = document.getElementById('descricao')

    var imagem = document.getElementById('imagem')


    if (hora >= 0 && hora < 12) {
        descricao.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. Boa Dia!`
        imagem.src = 'img/manha.jpg';
        document.body.style.backgroundColor = "rgb(200, 155, 31)"
    } else if (hora >= 12 && hora < 18) {
        descricao.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. Boa tarde!`
        imagem.src = 'img/tarde.jpg';
        document.body.style.backgroundColor = "rgb(0, 136, 247)"
    } else {
        descricao.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. Boa noite!`
        imagem.src = 'img/noite.jpg';
    }
}
