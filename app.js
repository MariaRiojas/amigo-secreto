const amigos = [];
const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const botonAñadir = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");
const resultadoLista = document.getElementById("resultado");

botonAñadir.addEventListener("click", agregarAmigo);
botonSortear.addEventListener("click", sortearAmigo);

function agregarAmigo() {
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para sortear.");
        return;
    }

    // Selecciona un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Muestra el resultado
    resultadoLista.innerHTML = `<li><strong>🎉 ${amigoSeleccionado} ha sido seleccionado 🎉</strong></li>`;
}
