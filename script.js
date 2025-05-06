

function mostrarOverlay() {
    let overlayElement = document.querySelector("#overlay")
    let gavetaElement = document.querySelector("#gaveta")

    if (overlayElement.classList.contains("invisible")) {
        overlayElement.classList.remove("invisible", "opacity-0")
        gavetaElement.classList.remove("-right-full")
        gavetaElement.classList.add("right-0")

    } else {
        overlayElement.classList.add("invisible", "opacity-0")
        gavetaElement.classList.remove("right-0")
        gavetaElement.classList.add("-right-full")
    }
}

function voltarHome() {
    window.location.href = "/"
}

function mudarParaClientes() {
    let captureIdClientes = document.querySelector("#clientes")
    window.location.href = "/clientes.html"
}

function mudarParaProdutos() {
    window.location.href = "/produtos.html"
}


