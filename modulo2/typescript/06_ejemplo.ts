// Define the Usuario interface locally to avoid missing-module errors.
// Alternatively create a separate file named 05_interface.ts that exports this interface.
export {}
interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 12,
    nombre: 'Jose Garcia Marquez'
}
const usuario2: Usuario = {
    id: 13,
    nombre: 'Pablo Escobar',
    correo: 'pablo@escobar.com'
}
console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);
console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);