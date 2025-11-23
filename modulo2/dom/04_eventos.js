let parrafo = null;
document.getElementById("crear").addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Parrafo dinamico desde Javascript";
    document.getElementById("contenedor").appendChild(parrafo);
});


document.getElementById("eliminar").addEventListener("click", () => {
    if (parrafo) parrafo.remove();
});


function saludar () {
    alert("Hola, saludos desde un evento");
}


document.getElementById("parrafo")
    .addEventListener("dblclick", () => {
    alert("Hiciste doble click en el párrafo")

});

document.getElementById("nombre")
    .addEventListener('input', (a) => {
    console.log("Tecla presionada:", a.target.value);
});