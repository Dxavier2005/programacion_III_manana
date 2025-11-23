"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriaClinica = void 0;
var HistoriaClinica = /** @class */ (function () {
    function HistoriaClinica(nombrePaciente) {
        this.idHistoria = 'HC-0001';
        this.nombrePaciente = nombrePaciente;
        this.generarFechaRegistro();
    }
    HistoriaClinica.prototype.generarFechaRegistro = function () {
        this.fechaRegistro = (new Date()).toDateString();
    };
    HistoriaClinica.prototype.getFechaRegistro = function () {
        return this.fechaRegistro;
    };
    HistoriaClinica.prototype.getAtributes = function () {
        return {
            paciente: this.nombrePaciente,
            fechaRegistro: this.fechaRegistro,
            idHistoria: this.idHistoria
        };
    };
    return HistoriaClinica;
}());
exports.HistoriaClinica = HistoriaClinica;
// Ejemplo de uso y demostración de modificadores de acceso
console.log("=== SISTEMA DE HISTORIAS CLÍNICAS ===\n");
// Crear instancias de historias clínicas
var historia1 = new HistoriaClinica("Juan Pérez");
var historia2 = new HistoriaClinica("María García");
var historia3 = new HistoriaClinica("Carlos López");
// Demostrar acceso público
console.log("📋 Acceso a propiedades PÚBLICAS:");
console.log("Paciente 1: ".concat(historia1.nombrePaciente));
console.log("Paciente 2: ".concat(historia2.nombrePaciente));
console.log("Paciente 3: ".concat(historia3.nombrePaciente, "\n"));
// Demostrar acceso a métodos públicos
console.log("📅 Acceso a métodos públicos (getFechaRegistro):");
console.log("Fecha registro Historia 1: ".concat(historia1.getFechaRegistro()));
console.log("Fecha registro Historia 2: ".concat(historia2.getFechaRegistro(), "\n"));
// Mostrar todos los atributos usando método público
console.log("📝 Información completa de historias clínicas:");
console.log("Historia 1:", historia1.getAtributes());
console.log("Historia 2:", historia2.getAtributes());
console.log("Historia 3:", historia3.getAtributes());
console.log("\n🔒 NOTA: Las propiedades 'fechaRegistro' (private) e 'idHistoria' (protected)");
console.log("solo son accesibles desde dentro de la clase y sus métodos públicos.");
// Ejemplo de modificación de propiedad pública
console.log("\n✏️ Modificando nombre del paciente (propiedad pública):");
historia1.nombrePaciente = "Juan Carlos Pérez Mendoza";
console.log("Nombre actualizado: ".concat(historia1.nombrePaciente));
