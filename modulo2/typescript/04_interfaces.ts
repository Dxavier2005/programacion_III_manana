interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuarioA: Usuario = {
    id: 12,
    nombre: 'Jose Garcia Marquez'
}
const usuarioB: Usuario = {
    id: 13,
    nombre: 'Pablo Escobar',
    correo: 'pablo@escobar.com'
}
console.log(usuarioA);
console.log(usuarioA.id);
console.log(usuarioA.nombre);
console.log(usuarioA.correo);
console.log(usuarioB);
console.log(usuarioB.id);
console.log(usuarioB.nombre);
console.log(usuarioB.correo);