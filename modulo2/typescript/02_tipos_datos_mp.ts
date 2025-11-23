export let edadPaciente: number = 45;
let nombrePaciente: string = 'Juan Pérez';
let enTratamiento: boolean = true;
let valorIndefinido: any = "N/A";

if (edadPaciente > 18 && enTratamiento) {
    console.log('Paciente adulto bajo tratamiento');
} else {
    console.log('Paciente no está en tratamiento');
}

let diagnosticos: string[] = ['Diabetes', 'Hipertensión', 'Asma'];

for (let i = 0; i < diagnosticos.length; i++) {
    console.log(diagnosticos[i]);
}

enum EstadoConsulta {
    Pendiente,
    Realizada,
    Archivada
}

console.log(EstadoConsulta);
console.log(EstadoConsulta.Realizada);
