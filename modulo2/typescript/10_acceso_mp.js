"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _09_acceso_1 = require("./09_acceso");
var historia = new _09_acceso_1.HistoriaClinica('Paciente: Juan Pérez');
console.log(historia.nombrePaciente);
console.log(historia.getFechaRegistro());
console.log(historia.getAtributes());
