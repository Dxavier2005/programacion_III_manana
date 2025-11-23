import { HistoriaClinica } from "./09_acceso";

const historia: HistoriaClinica = new HistoriaClinica('Paciente: Juan Pérez');
console.log(historia.nombrePaciente);
console.log(historia.getFechaRegistro());
console.log(historia.getAtributes());
