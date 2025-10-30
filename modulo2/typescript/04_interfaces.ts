export {};

interface Usuario {
    id: number;
    nombre: string;
    correo?: string; 
}

const usuario1: Usuario = {
    id: 12,
    nombre: "Jose Garcia Marquez",
    
}

const usuario2: Usuario = {
    id: 15,
    nombre: "Ana Lopez",
    correo: "ana.lopez@example.com" 
}
console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo || "Sin correo");

console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);