// Mi primer archivo TypeScript
console.log("¡Hola mundo desde TypeScript!");

// Ejemplo de tipado estático
let mensajeTS: string = "Este es un mensaje con tipo string";
let numero: number = 42;
let activo: boolean = true;

console.log(mensajeTS);
console.log(`El número es: ${numero}`);
console.log(`Está activo: ${activo}`);

// Función con tipos
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}

console.log(saludar("TypeScript"));