let clientes = [];


function carregarClientes(listaDeClientes) {
    let tbodyElement = document.querySelector("#tabela");
    tbodyElement.innerHTML = '';
    listaDeClientes.map((cliente) => {
        tbodyElement.innerHTML += `
            <tr class="*:leading-[40px]">
            
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.data}</td>
                <td class="w-[100px] flex justify-center gap-4">
                    <box-icon name="pencil" onclick="editarCliente('${cliente.id}')"></box-icon>
                    <box-icon onclick="deleterClientes('${cliente.id}')"name="trash"></box-icon>
                </td>
            </tr>
        `;
    })
}

carregarClientes(clientes);

function cadastrarCliente(form) {
    event.preventDefault();

    // vão pegar os valores dos inputs do formulario e transformar em um objeto
    let formData = new FormData(form);
    let cliente = Object.fromEntries(formData.entries());

    // inserir o novo cliente no final do arrray clientes
    fetch("http://localhost:3000/clientes", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(cliente)

    }).then(res => res.json()).then(() => {
        alert("Registo criado com sucesso")
        mostrarOverlay();
        carregarClientes(clientes);
    })
}

function buscarClientes() {
    let req = fetch("http://localhost:3000/clientes")
        .then((res) => res.json())
        .then((lista) => {
            clientes = lista
            carregarClientes(clientes)
        })
}


function editarCliente(id) {
    let confirmar = confirm("Tem certeza que deseja alterar?")
    let formData = new FormData(form);
    let cliente = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/JSON" },
        body: JSON.stringify(cliente)
    })
        .then(res => res.json())
        .then(() => {
            mostrarOverlay()
            alert("Registro alterado com sucesso!")
        })
}


function deleterClientes(id) {
    let confirmar = confirm("Deseja mesmo excluir cliente?")
    if (confirmar) {
        fetch(`http://localhost:3000/clientes/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(res => {
                alert(`Linha ${id} apagada`)
            })
    } else {
        alert("Operação cancelda")
    }
}

buscarClientes()

