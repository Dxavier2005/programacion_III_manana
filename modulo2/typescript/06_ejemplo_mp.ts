// Definimos la interfaz Paciente (antes Usuario)
export {}

interface Paciente {
    id: number;
    nombre: string;
    correo?: string; // opcional
}

// Ejemplos de pacientes registrados
const paciente1: Paciente = {
    id: 12,
    nombre: 'Carlos Pérez'
}

const paciente2: Paciente = {
    id: 13,
    nombre: 'María Torres',
    correo: 'maria.torres@hospital.com'
}

// Impresiones
console.log(paciente1);
console.log(paciente1.id);
console.log(paciente1.nombre);
console.log(paciente1.correo);

console.log(paciente2);
console.log(paciente2.id);
console.log(paciente2.nombre);
console.log(paciente2.correo);
