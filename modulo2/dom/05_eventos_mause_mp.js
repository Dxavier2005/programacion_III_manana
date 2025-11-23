const caja = document.getElementById("caja");

caja.addEventListener("mouseover", () => {
    caja.style.backgroundColor = 'yellow';
});

caja.addEventListener("mouseout", () => {
    caja.style.backgroundColor = 'yellow';
});

caja.addEventListener('click', () => {
    alert('Interacción en Área Clínica');
});

const areaTouch = document.getElementById("areaTouch");

areaTouch.addEventListener("touchstart", () => {
    areaTouch.style.backgroundColor = 'blue';
});

areaTouch.addEventListener("touchend", () => {
    areaTouch.style.backgroundColor = 'green';
});

areaTouch.addEventListener('click', () => {
    alert('Interacción en Área de Registro Médico');
});
