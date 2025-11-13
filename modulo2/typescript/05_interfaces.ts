export interface Usuario {
    id: number;
    nombre: string;
    correo?: string; // El signo ? indica que este campo es opcional
}


// Ejemplo de uso:
const usuario1: Usuario = {
    id: 1,
    nombre: 'Dario',
    correo: 'dario@gmail.com'
};


const usuario2: Usuario = {
    id: 2,
    nombre: 'Dario Simbaña' // correo no es obligatorio
};


console.log(usuario1);
console.log(usuario2);
console.log(usuario1.correo); // Output: anthony@gmail.com
