interface Paciente {
    id: number;
    nombre: string;
    correo?: string;
}

const pacienteA: Paciente = {
    id: 101,
    nombre: 'Carlos Pérez'
}

const pacienteB: Paciente = {
    id: 102,
    nombre: 'María López',
    correo: 'maria.lopez@clinica.com'
}

console.log(pacienteA);
console.log(pacienteA.id);
console.log(pacienteA.nombre);
console.log(pacienteA.correo);   
console.log(pacienteB);
console.log(pacienteB.id);
console.log(pacienteB.nombre);
console.log(pacienteB.correo);

export {};

