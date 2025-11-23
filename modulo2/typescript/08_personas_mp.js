"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HospitalManager = /** @class */ (function () {
    function HospitalManager() {
        this.personal = [];
    }
    HospitalManager.prototype.agregarPersonal = function (persona) {
        this.personal.push(persona);
        console.log("\u2705 ".concat(persona.especialidad, " ").concat(persona.nombre, " agregado al sistema"));
    };
    HospitalManager.prototype.obtenerPersonal = function () {
        return this.personal;
    };
    HospitalManager.prototype.buscarPorId = function (id) {
        return this.personal.find(function (persona) { return persona.id === id; });
    };
    HospitalManager.prototype.buscarPorEspecialidad = function (especialidad) {
        return this.personal.filter(function (persona) { return persona.especialidad.toLowerCase().includes(especialidad.toLowerCase()); });
    };
    HospitalManager.prototype.mostrarPersonal = function () {
        console.log("\n=== PERSONAL MÉDICO REGISTRADO ===");
        this.personal.forEach(function (persona) {
            console.log("\uD83C\uDFE5 ID: ".concat(persona.id));
            console.log("\uD83D\uDC68\u200D\u2695\uFE0F ".concat(persona.especialidad, ": ").concat(persona.nombre));
            console.log("\uD83D\uDCDE Tel\u00E9fono: ".concat(persona.telefono || 'No disponible'));
            console.log("---");
        });
    };
    return HospitalManager;
}());
// Crear instancia del gestor hospitalario
var hospital = new HospitalManager();
// Agregar personal médico
var doctor1 = {
    id: 1,
    nombre: "Dr. Carlos Mendez",
    especialidad: "Cardiología",
    telefono: "555-1234"
};
var doctora2 = {
    id: 2,
    nombre: "Dra. Ana García",
    especialidad: "Pediatría",
    telefono: "555-5678"
};
var enfermero1 = {
    id: 3,
    nombre: "Enf. Luis Torres",
    especialidad: "Enfermería"
};
var psicologa1 = {
    id: 4,
    nombre: "Psic. María López",
    especialidad: "Psicología",
    telefono: "555-9999"
};
// Agregar personal al hospital
hospital.agregarPersonal(doctor1);
hospital.agregarPersonal(doctora2);
hospital.agregarPersonal(enfermero1);
hospital.agregarPersonal(psicologa1);
// Mostrar todo el personal
hospital.mostrarPersonal();
// Buscar personal específico
console.log("\n🔍 Buscando personal de Pediatría:");
var pediatras = hospital.buscarPorEspecialidad("Pediatría");
pediatras.forEach(function (p) { return console.log("- ".concat(p.nombre)); });
console.log("\n🔍 Buscando personal con ID 3:");
var personalEncontrado = hospital.buscarPorId(3);
if (personalEncontrado) {
    console.log("Encontrado: ".concat(personalEncontrado.nombre, " - ").concat(personalEncontrado.especialidad));
}
console.log("\n\uD83D\uDCCA Total de personal registrado: ".concat(hospital.obtenerPersonal().length));
