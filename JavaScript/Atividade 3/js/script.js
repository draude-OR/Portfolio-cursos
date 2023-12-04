/* Função que exibe campos de cadastro, acionado ao clicar em novo*/ 
function ExibirCadastro(acao){
    //pega div que envolve campos de cadastro
    var formCadastro = document.getElementById("formCadastro")
    //acessa a classe dessa div e remove a classe que está ocultando a div da tela
    formCadastro.classList.remove("ocultar")
    if(acao == "cadastrar"){
        document.getElementById("botaoEditar").classList.add("ocultar")
        document.getElementById("botaoCadastrar").classList.remove("ocultar")
    }else{
        document.getElementById("botaoEditar").classList.remove("ocultar")
        document.getElementById("botaoCadastrar").classList.add("ocultar")      
    }
}
/* Função que cadastra as linhas na tabela de acordo com dados digitados. Função acionada ao clicar em Adicionar */ 
function AdicionarRegistro(){
    /*Pegar os campos de cadastro do usuário*/
    var campoNome = document.getElementById("nome")
    var campoSobrenome = document.getElementById("sobrenome")
    var campoIdade = document.getElementById("idade")
    var campoEscolaridade = document.getElementById("escolaridade")
    //pegar a tabela
    var tabelaCadastro = document.getElementById("tabelaCadastro")
    //pegar o tbody(corpo) da tabela
    var corpoTabela = tabelaCadastro.querySelector("tbody")
    //criar a linha
    var linhaTabela = document.createElement("tr")
    //criar as colunas
    var colNome = document.createElement("td")
    var colSobrenome = document.createElement("td")
    var colIdade = document.createElement("td")
    var colEscolaridade = document.createElement("td")
    var colAcoes = document.createElement("td")
    //atribuir os valores às colunas
    colNome.textContent = campoNome.value
    colSobrenome.textContent = campoSobrenome.value
    colIdade.textContent = campoIdade.value
    colEscolaridade.textContent = campoEscolaridade.value
    //criar o botão de ação Editar
    var btnEditar = document.createElement("button")
    //Adicionar a classe no botão editar
    btnEditar.setAttribute("class", "btn btn-primary bi bi-pencil")
    //adicionar a função de click no botão editar
    btnEditar.setAttribute("onClick", "EditarLinha(this)")
    //adicionar o texto no botão editar
    btnEditar.textContent = " Editar"
    //criar o botão de ação Excluir
    var btnExcluir = document.createElement("button"); 
    //Adicionar a classe no botão excluir    
    btnExcluir.setAttribute("class", "btn btn-danger bi bi-trash3-fill");
    //adicionar função de click no botão excluir
    btnExcluir.setAttribute("onClick", "ExcluirLinha(this)");
    //adicionar texto no botão excluir
    btnExcluir.textContent = " Excluir";
    //atribuir os botões de ação para a coluna ações
    colAcoes.append(btnEditar, btnExcluir);
    //adicionar as colunas na linha
    linhaTabela.append(colNome, colSobrenome, colIdade, colEscolaridade, colAcoes);
    //adicionar a linha ao corpo da tabela
    corpoTabela.append(linhaTabela);

    //ocultar os campos do cadastro
    OcultarCadastro();
}

/* Função para esconder os campos de cadastro */
function OcultarCadastro(){
    //pegar o form que envolve os campos de cadastro
    var formCadastro = document.getElementById("formCadastro");
    //acessar a classe desse form e remover a classe que está ocultando o form da tela
    formCadastro.classList.add("ocultar");
    //limpar os valores dos campos
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("escolaridade").value = "";
}

/* Função que remove a linha do botao clicado */
function ExcluirLinha(botaoExcluirClicado){
    //verificar se o usuário deseja excluir o registro
    var confirmar = confirm("Deseja excluir o registro?");
    if(confirmar){
        /*função closest procurar o elemento pai, especificado dentro dos parenteses, mais próximo*/
        /*neste caso pegar a linha do botão clicado*/
        var linhaTabela = botaoExcluirClicado.closest("tr");
        /*remover o elemento do html*/
        linhaTabela.remove();
    }
}

/* Função que remove a linha do botão clicado*/
function EditarLinha(botaoEditarClicado){
    /*pegar a linha do botão clicado*/
    var linhaTabela = botaoEditarClicado.closest("tr");
    /*pegar todas as colunas da linha em edição*/
    var colunas = linhaTabela.querySelectorAll("td");
    /*Nome*/
    var nome = colunas[0].textContent;
    var sobrenome = colunas[1].textContent;
    /*Idade*/
    var idade = colunas[2].textContent;
    /*Sexo*/
    var escolaridade = colunas[3].textContent;
    //exibir os campos de cadastro
    ExibirCadastro("editar");
    //adicionar valores das colunas nos campos de cadastro para edição
    document.getElementById("nome").value = nome;
    document.getElementById("sobrenome").value = sobrenome;
    document.getElementById("idade").value = idade;
    document.getElementById("escolaridade").value = escolaridade;

     //remover o modo de edição de todas as linhas
     RemoveModoEdicaoDeTodasAsLinhas();

    //adicionar a classe edição na linha clicada para realizar a alteração
    linhaTabela.classList.add("edicao");
}

/*Função que subscreve as informações da linha em edição*/
function AlterarRegistro(){
     //pega tabela
     var tabelaCadastro = document.getElementById("tabelaCadastro");
     //pega o tbody(corpo) da tabela
     var bodyTabela = tabelaCadastro.querySelector("tbody");   
     //pega a linha em edicao
     var linhaTabelaEmEdicao = bodyTabela.querySelector("tr.edicao");
     //pega todas as colunas da linha em edicao
     var colunas = linhaTabelaEmEdicao.querySelectorAll("td");
     /*Pega campos de cadastro de usuario*/
     var campoNome = document.getElementById("nome");
     var campoSobrenome = document.getElementById("sobrenome");
     var campoIdade = document.getElementById("idade");
     var campoEscolaridade = document.getElementById("escolaridade");
     //subcreve valores dos campos de cadastro nas colunas da linha em edição
     colunas[0].textContent = campoNome.value;
     colunas[1].textContent = campoSobrenome.value;
     colunas[2].textContent = campoIdade.value;
     colunas[3].textContent = campoEscolaridade.value;
     //esconde campo de cadastro
     OcultarCadastro();
     //remove modo de edicao de todas as linhas
     RemoveModoEdicaoDeTodasAsLinhas();
}

// Função para remover a classe modo de edição
function RemoveModoEdicaoDeTodasAsLinhas(){
    // pegar a classe edição
    var linhas = document.getElementsByClassName("edicao");
    for(var posicao = 0; posicao < linhas.length; posicao++){
        linhas[posicao].classList.remove("edicao");        
    } 
}

// Função para o Botão Cancelar
function Cancelar(){
     //Ocultar os campos de cadastro
     OcultarCadastro();
     //remover o modo de edição de todas as linhas
     RemoveModoEdicaoDeTodasAsLinhas();
}

function validaNumeros(evento) {
    var charCode = evento.charCode ? evento.charCode : evento.keyCode;
    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

function validaLetras(evento) {
    var charCode = evento.charCode ? evento.charCode : evento.keyCode;
    if (charCode != 8 && charCode != 9) {
        if (charCode != 32 && charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122) {
          return false;
        }
    }
  }
  
