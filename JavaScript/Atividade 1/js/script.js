const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmar-senha")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checarCampos()
})

function checarCampos() {
    const valorUsuario = usuario.value
    const valorEmail = email.value
    const valorSenha = senha.value
    const valorConfirmarSenha = confirmarSenha.value

    if (valorUsuario === "") {
        // alert("O nome de usuário é obrigatório!")
        // usuario.focus()
        // return
        setarErro(usuario, "O nome de usuário é obrigatório!")
    } else if (valorUsuario.length < 3 || valorUsuario.length > 20) {
        setarErro(usuario, "O nome do usuário precisa ter entre 3 e 20 caracteres.")
    } else {
        setarSucesso(usuario)
    }

    if (valorEmail === "") {
        setarErro(email, "O Email é obrigatório!")
    } else if (!checarEmail(valorEmail)) {
        setarErro(email, "Por favor, insira um e-mail válido.")
    } else {
        setarSucesso(email)
    }

    if (valorSenha === "") {
        setarErro(senha, "A senha é obrigatório!")
    } else if (valorSenha.length < 8 || valorSenha.length > 15) {
        setarErro(senha, "A senha precisa ter entre 8 e 15 caracteres.")
    } else {
        setarSucesso(senha)
    }

    if (valorConfirmarSenha === "") {
        setarErro(confirmarSenha, "O confirmar senha é obrigatório!")
    } else if (valorConfirmarSenha !== valorSenha) {
        setarErro(confirmarSenha, "O confirmar senha deve ser identico a senha")
    } else {
        setarSucesso(confirmarSenha, senha)
    }

    const formControls = form.querySelectorAll(".form-control")
    const formvValido = [...formControls].every((formControl) => {
        return (formControl.className === "form-control sucesso")
    })
    
    if(formvValido){
        // alert("Form Válido!!")
        form.submit()
    }
}

function setarErro(campo, mensagem) {
    const formControl = campo.parentElement
    const small = formControl.querySelector("small")

    small.innerText = mensagem

    formControl.className = "form-control erro"
    campo.focus()
}

function setarSucesso(campo) {
    const formControl = campo.parentElement

    formControl.className = "form-control sucesso"
}

function checarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
 
function mostrarSenha () {
    var inputPass = document.getElementById("senha")
    var inputConfPass = document.getElementById("confirmar-senha")

    if(inputPass.type === "password" && inputConfPass.type === "password"){
        inputPass.setAttribute("type", "text")
        inputConfPass.setAttribute("type", "text")
    } else {
        inputPass.setAttribute("type", "password")
        inputConfPass.setAttribute("type", "password")
    }
}