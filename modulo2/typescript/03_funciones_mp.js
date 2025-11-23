"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saludarPaciente(nombre) {
    return "Bienvenido paciente ".concat(nombre);
}
console.log(saludarPaciente('Juan Pérez'));
function calcularIMCFunc(peso, altura) {
    return peso / (altura * altura);
}
console.log(calcularIMCFunc(70, 1.75));
function mostrarMensajeIngresoPaciente() {
    console.log("Paciente registrado correctamente");
    console.log("Historia cl\u00EDnica generada");
}
mostrarMensajeIngresoPaciente();
function calcularDosis(peso) {
    return peso * 0.02;
}
function imprimirDosisPaciente(peso) {
    var dosis = calcularDosis(peso);
    console.log("La dosis recomendada es: ".concat(dosis, " mg"));
}
console.log(calcularDosis(70));
imprimirDosisPaciente(70);
