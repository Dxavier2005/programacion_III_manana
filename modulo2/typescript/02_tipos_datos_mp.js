"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.edadPaciente = void 0;
exports.edadPaciente = 45;
var nombrePaciente = 'Juan Pérez';
var enTratamiento = true;
var valorIndefinido = "N/A";
if (exports.edadPaciente > 18 && enTratamiento) {
    console.log('Paciente adulto bajo tratamiento');
}
else {
    console.log('Paciente no está en tratamiento');
}
var diagnosticos = ['Diabetes', 'Hipertensión', 'Asma'];
for (var i = 0; i < diagnosticos.length; i++) {
    console.log(diagnosticos[i]);
}
var EstadoConsulta;
(function (EstadoConsulta) {
    EstadoConsulta[EstadoConsulta["Pendiente"] = 0] = "Pendiente";
    EstadoConsulta[EstadoConsulta["Realizada"] = 1] = "Realizada";
    EstadoConsulta[EstadoConsulta["Archivada"] = 2] = "Archivada";
})(EstadoConsulta || (EstadoConsulta = {}));
console.log(EstadoConsulta);
console.log(EstadoConsulta.Realizada);
