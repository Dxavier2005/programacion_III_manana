export {};

import { Paciente } from "./11_herencia";

export class HistoriaClinica extends Paciente {
    getDetalles(): void{
       console.log('Historia clínica registrada correctamente');
    }
}

const historia = new HistoriaClinica('Carlos Mendez', 'Urgencias');
console.log(historia.nombre);
console.log(historia.tipoPaciente);
historia.registrar();
historia.getDetalles();
