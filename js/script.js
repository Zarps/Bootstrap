
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso")
    }else {
        alert('Por favor preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
}