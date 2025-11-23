const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCasas');
let casas = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const direccion = document.getElementById('direccion').value.trim(); // Nombre del paciente
  const descripcion = document.getElementById('descripcion').value.trim(); // Diagnóstico
  const precio = parseFloat(document.getElementById('precio').value.trim()); // Costo

  if (direccion && descripcion && !isNaN(precio)) {
    const nuevaCasa = { id: Date.now(), direccion, descripcion, precio };
    casas.push(nuevaCasa);
    renderizarCasa(nuevaCasa);
    formulario.reset();
  }
});

function renderizarCasa({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'casa';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>Paciente: ${direccion}</h3>
    <p>Diagnóstico: ${descripcion}</p>
    <p><strong>Costo de Consulta: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar Historia</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.casa');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    casas = casas.filter(c => c.id !== id);
    tarjeta.remove();
  }
});
