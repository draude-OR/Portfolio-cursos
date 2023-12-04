const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checarCampos()
})

function checarCampos() {
    const valorUsuario = usuario.value
    const valorSenha = senha.value

    // VALIDAÇÃO SENHA
    const regex = /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
    // (?=(?:.*?[A-Z]){3}) - Mínimo 3 letras maiúsculas
    // (?=(?:.*?[0-9]){2}) - Mínimo 2 números
    // (?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&] - Mínimo 1 caractere especial


    if (valorUsuario === "" && valorSenha === "") {
        alert("O nome de usuário e a senha são obrigatórios.")
        setarErro(senha)
        setarErro(usuario)
    } else if (valorUsuario === "") {
        alert("O nome de usuário é obrigátorio")
        setarErro(usuario)
    } else if (valorUsuario.length < 3 || valorUsuario.length > 15) {
        alert("O nome de usuário precisa ter entre 3 e 15 caracteres.")
        setarErro(usuario)
    } else if (valorSenha === "") {
        alert("A senha é obrigátoria")
        setarSucesso(usuario)
        setarErro(senha)
    } else if (valorSenha.length < 8 || valorSenha.length > 20) {
        alert("A senha precisa ter entre 8 e 20 caracteres.")
        setarErro(senha)
        setarSucesso(usuario)
    } else if (!regex.exec(valorSenha)) {
        alert("A senha deve conter no minimo 3 letras maiusculas, 2 números e 1 caracter especial.")
        setarErro(senha)
    } else {
        setarSucesso(usuario)
        setarSucesso(senha)
    }

    ///////////// FORM VALIDO ///////////////
    const formControls = form.querySelectorAll(".form-control")
    const formvValido = [...formControls].every((formControl) => {
        return (formControl.className === "form-control sucesso")
    })

    if (formvValido) {
        alert("Usuário e Senha estão Ok.")
        // form.submit()
    }
}




function setarErro(campo) {
    const formControl = campo.parentElement

    formControl.className = "form-control erro"
    campo.focus()
}

function setarSucesso(campo) {
    const formControl = campo.parentElement

    formControl.className = "form-control sucesso"
}




//////////// BOTAO DO OLHO PARA MOSTRAR A SENHA OU OCULTAR ////////////////
function mostrarSenha() {
    var btnShowPass = document.getElementById("btn-senha")
    var inputPass = document.getElementById("senha")

    if (inputPass.type === "password") {
        inputPass.setAttribute("type", "text")
        btnShowPass.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        inputPass.setAttribute("type", "password")
        btnShowPass.classList.replace("fa-eye-slash", "fa-eye")
    }

}

// function mostrarSenha() {
//     var icone = document.getElementById("icone")

//     if (senha.type === "password") {
//         senha.type = "text"
//         icone.className = "fa-eye-slash"
//     } else {
//         senha.type = "password"
//         icone.className = "fa-eye"
//     }
// }