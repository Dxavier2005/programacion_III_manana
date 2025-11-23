"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = exports.Enfermero = exports.Doctor = exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, cedula, edad) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("\uD83D\uDC4B Hola, soy ".concat(this.nombre));
    };
    Persona.prototype.mostrarInfo = function () {
        console.log("\uD83D\uDCCB Nombre: ".concat(this.nombre));
        console.log("\uD83C\uDD94 C\u00E9dula: ".concat(this.cedula));
        console.log("\uD83C\uDF82 Edad: ".concat(this.edad, " a\u00F1os"));
    };
    return Persona;
}());
exports.Persona = Persona;
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(nombre, cedula, edad, especialidad, licenciaMedica, salario) {
        var _this = _super.call(this, nombre, cedula, edad) || this;
        _this.especialidad = especialidad;
        _this.licenciaMedica = licenciaMedica;
        _this.salario = salario;
        return _this;
    }
    Doctor.prototype.saludar = function () {
        console.log("\uD83D\uDC68\u200D\u2695\uFE0F Hola, soy el Dr. ".concat(this.nombre, ", especialista en ").concat(this.especialidad));
    };
    Doctor.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("\uD83E\uDE7A Especialidad: ".concat(this.especialidad));
        console.log("\uD83D\uDCC4 Licencia: ".concat(this.licenciaMedica));
    };
    Doctor.prototype.atenderPaciente = function (nombrePaciente) {
        console.log("\uD83E\uDE7A Dr. ".concat(this.nombre, " est\u00E1 atendiendo a ").concat(nombrePaciente));
    };
    Doctor.prototype.getSalario = function () {
        return this.salario;
    };
    return Doctor;
}(Persona));
exports.Doctor = Doctor;
var Enfermero = /** @class */ (function (_super) {
    __extends(Enfermero, _super);
    function Enfermero(nombre, cedula, edad, turno, area) {
        var _this = _super.call(this, nombre, cedula, edad) || this;
        _this.turno = turno;
        _this.area = area;
        return _this;
    }
    Enfermero.prototype.saludar = function () {
        console.log("\uD83D\uDC69\u200D\u2695\uFE0F Hola, soy ".concat(this.nombre, ", enfermero/a del \u00E1rea de ").concat(this.area));
    };
    Enfermero.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("\uD83D\uDD50 Turno: ".concat(this.turno));
        console.log("\uD83C\uDFE5 \u00C1rea: ".concat(this.area));
    };
    Enfermero.prototype.administrarMedicamento = function (paciente, medicamento) {
        console.log("\uD83D\uDC8A ".concat(this.nombre, " administrando ").concat(medicamento, " a ").concat(paciente));
    };
    Enfermero.prototype.cambiarTurno = function (nuevoTurno) {
        this.turno = nuevoTurno;
        console.log("\uD83D\uDD04 ".concat(this.nombre, " cambi\u00F3 a turno de ").concat(nuevoTurno));
    };
    return Enfermero;
}(Persona));
exports.Enfermero = Enfermero;
var Paciente = /** @class */ (function (_super) {
    __extends(Paciente, _super);
    function Paciente(nombre, cedula, edad, tipoSeguro) {
        var _this = _super.call(this, nombre, cedula, edad) || this;
        _this.numeroHistoria = "HC-".concat(Math.floor(Math.random() * 10000));
        _this.tipoSeguro = tipoSeguro;
        _this.diagnostico = "Pendiente";
        return _this;
    }
    Paciente.prototype.saludar = function () {
        console.log("\uD83E\uDD12 Hola, soy ".concat(this.nombre, ", soy paciente del hospital"));
    };
    Paciente.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("\uD83D\uDCCB Historia: ".concat(this.numeroHistoria));
        console.log("\uD83C\uDFE5 Seguro: ".concat(this.tipoSeguro));
    };
    Paciente.prototype.asignarDiagnostico = function (diagnostico) {
        this.diagnostico = diagnostico;
        console.log("\uD83D\uDCDD Diagn\u00F3stico asignado a ".concat(this.nombre, ": ").concat(diagnostico));
    };
    Paciente.prototype.getDiagnostico = function () {
        return this.diagnostico;
    };
    return Paciente;
}(Persona));
exports.Paciente = Paciente;
// Demostración del sistema hospitalario con herencia
console.log("=== SISTEMA HOSPITALARIO CON HERENCIA ===\n");
// Crear instancias de cada tipo
var doctor1 = new Doctor("Carlos Mendez", "12345678", 45, "Cardiología", "LM-001", 5000);
var enfermera1 = new Enfermero("Ana López", "87654321", 32, "mañana", "UCI");
var paciente1 = new Paciente("Juan García", "11223344", 28, "Seguro Social");
console.log("🏥 PERSONAL Y PACIENTES DEL HOSPITAL:\n");
// Saludos polimórficos
doctor1.saludar();
enfermera1.saludar();
paciente1.saludar();
console.log("\n📋 INFORMACIÓN DETALLADA:\n");
console.log("DOCTOR:");
doctor1.mostrarInfo();
console.log("\uD83D\uDCB0 Informaci\u00F3n privada - Salario: $".concat(doctor1.getSalario()));
console.log("\nENFERMERA:");
enfermera1.mostrarInfo();
console.log("\nPACIENTE:");
paciente1.mostrarInfo();
console.log("\n🏥 ACTIVIDADES HOSPITALARIAS:\n");
// Actividades específicas de cada rol
doctor1.atenderPaciente(paciente1.nombre);
paciente1.asignarDiagnostico("Hipertensión arterial");
enfermera1.administrarMedicamento(paciente1.nombre, "Enalapril 10mg");
enfermera1.cambiarTurno("tarde");
console.log("\n✅ HERENCIA DEMOSTRADA:");
console.log("- Persona (clase base)");
console.log("- Doctor, Enfermero, Paciente (clases derivadas)");
console.log("- Cada clase hereda propiedades y métodos de Persona");
console.log("- Cada clase especializa comportamientos (polimorfismo)");
