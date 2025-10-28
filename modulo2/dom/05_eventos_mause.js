const caja = document.getElementById("caja");

caja.addEventListener("mouseover", () => {
    caja.style.backgroundColor = 'yellow';

});

caja.addEventListener("mouseout", () => {
    caja.style.backgroundColor = 'yelloow';

});

caja.addEventListener('click',() => {
    alert('Click');

});

const areaTouch = document.getElementById("areaTouch");
areaTouch.addEventListener("touchstart", () => {
    areaTouch.style.backgroundColor = 'blue';
});

areaTouch.addEventListener("touchend", () => {
    areaTouch.style.backgroundColor = 'green';
});

areaTouch.addEventListener('click', () => {
    alert('Click en Area Touch');
});
