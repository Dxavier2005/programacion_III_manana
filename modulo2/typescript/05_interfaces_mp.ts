export interface Paciente {
    id: number;
    nombre: string;
    correo?: string; // opcional
}

// Ejemplo de uso:
const paciente1: Paciente = {
    id: 1,
    nombre: 'Carlos Medina',
    correo: 'cmedina@hospital.com'
};

const paciente2: Paciente = {
    id: 2,
    nombre: 'Laura Villamar' // correo no obligatorio
};

console.log(paciente1);
console.log(paciente2);
console.log(paciente1.correo); // Output: cmedina@hospital.com
