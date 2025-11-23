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
exports.PacienteAmbulatorio = exports.PacienteHospitalizado = exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Paciente.prototype.registrar = function () {
        console.log("\u2705 Paciente ".concat(this.nombre, " registrado como ").concat(this.tipo));
    };
    Paciente.prototype.mostrarInfo = function () {
        console.log("\uD83D\uDC64 Nombre: ".concat(this.nombre));
        console.log("\uD83D\uDCCB Tipo: ".concat(this.tipo));
    };
    return Paciente;
}());
exports.Paciente = Paciente;
var PacienteHospitalizado = /** @class */ (function (_super) {
    __extends(PacienteHospitalizado, _super);
    function PacienteHospitalizado(nombre, habitacion) {
        var _this = _super.call(this, nombre, "hospitalizado") || this; // Llamada al constructor padre
        _this.habitacion = habitacion;
        _this.fechaIngreso = new Date();
        return _this;
    }
    PacienteHospitalizado.prototype.asignarHabitacion = function (nuevaHabitacion) {
        this.habitacion = nuevaHabitacion;
        console.log("\uD83C\uDFE5 ".concat(this.nombre, " trasladado a habitaci\u00F3n ").concat(nuevaHabitacion));
    };
    PacienteHospitalizado.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this); // Llamar método del padre
        console.log("\uD83C\uDFE0 Habitaci\u00F3n: ".concat(this.habitacion));
        console.log("\uD83D\uDCC5 Fecha ingreso: ".concat(this.fechaIngreso.toLocaleDateString()));
    };
    PacienteHospitalizado.prototype.darAlta = function () {
        console.log("\uD83C\uDF89 ".concat(this.nombre, " dado de alta de habitaci\u00F3n ").concat(this.habitacion));
    };
    return PacienteHospitalizado;
}(Paciente));
exports.PacienteHospitalizado = PacienteHospitalizado;
var PacienteAmbulatorio = /** @class */ (function (_super) {
    __extends(PacienteAmbulatorio, _super);
    function PacienteAmbulatorio(nombre, motivoConsulta, diasParaCita) {
        if (diasParaCita === void 0) { diasParaCita = 7; }
        var _this = _super.call(this, nombre, "ambulatorio") || this;
        _this.motivoConsulta = motivoConsulta;
        _this.proximaCita = new Date();
        _this.proximaCita.setDate(_this.proximaCita.getDate() + diasParaCita);
        return _this;
    }
    PacienteAmbulatorio.prototype.reprogramarCita = function (nuevosDias) {
        this.proximaCita = new Date();
        this.proximaCita.setDate(this.proximaCita.getDate() + nuevosDias);
        console.log("\uD83D\uDCC5 Cita reprogramada para ".concat(this.proximaCita.toLocaleDateString()));
    };
    PacienteAmbulatorio.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("\uD83E\uDE7A Motivo: ".concat(this.motivoConsulta));
        console.log("\uD83D\uDCC5 Pr\u00F3xima cita: ".concat(this.proximaCita.toLocaleDateString()));
    };
    return PacienteAmbulatorio;
}(Paciente));
exports.PacienteAmbulatorio = PacienteAmbulatorio;
// Demostración de herencia
console.log("=== SISTEMA DE GESTIÓN DE PACIENTES ===\n");
// Crear paciente básico
var paciente1 = new Paciente("Ana Martínez", "consulta general");
paciente1.registrar();
paciente1.mostrarInfo();
console.log("---");
// Crear paciente hospitalizado
var pacienteHosp = new PacienteHospitalizado("Carlos Ruiz", 205);
pacienteHosp.registrar();
pacienteHosp.mostrarInfo();
pacienteHosp.asignarHabitacion(301);
console.log("---");
// Crear paciente ambulatorio
var pacienteAmb = new PacienteAmbulatorio("María García", "Control rutinario", 5);
pacienteAmb.registrar();
pacienteAmb.mostrarInfo();
pacienteAmb.reprogramarCita(10);
console.log("---");
console.log("\n🏥 HERENCIA DEMOSTRADA:");
console.log("- Paciente (clase padre)");
console.log("- PacienteHospitalizado extends Paciente");
console.log("- PacienteAmbulatorio extends Paciente");
console.log("- Ambos heredan propiedades y métodos del padre");
console.log("- Cada uno agrega funcionalidad específica");
