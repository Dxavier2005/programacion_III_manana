// funcion basica
function saludarUnico(nombre: string): string {
    return `Hola ${nombre}`;
}

console.log(saludarUnico('Francisco'));
// funcion flecha
const sumarNumeros = (a: number, b: number): number => {
    return a + b;
}
console.log(sumarNumeros(5,5));


function saludarDeNuevo2(): void {
    console.log(`Hola`);
    console.log(`Bienvenido a Typescript`);
}
saludarDeNuevo2();


function obtenerAreaCirculo(radio: number): number{
    return Math.PI * radio * radio;
}
function imprimirAreaCirculo(radio: number): void{
    console.log(Math.PI * radio * radio);
}
console.log(obtenerAreaCirculo(5));
imprimirAreaCirculo(7);