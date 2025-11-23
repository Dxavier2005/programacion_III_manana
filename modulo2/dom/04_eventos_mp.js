let parrafo = null;
document.getElementById("crear").addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Nota médica generada dinámicamente";
    document.getElementById("contenedor").appendChild(parrafo);
});

document.getElementById("eliminar").addEventListener("click", () => {
    if (parrafo) parrafo.remove();
});

function saludar () {
    alert("Hola, información emitida por el médico");
}

document.getElementById("parrafo")
    .addEventListener("dblclick", () => {
    alert("Doble click detectado: mostrando información clínica");
});

document.getElementById("nombre")
    .addEventListener('input', (a) => {
    console.log("Texto ingresado:", a.target.value);
});
