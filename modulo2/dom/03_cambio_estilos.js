const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Mensaje actualizado"
mensaje.style.color = "red";

const link = document.getElementById("link");
link.style.textDecoration = "none";
link.setAttribute('href', 'https://www.google.com');
link.classList.add("botton");

