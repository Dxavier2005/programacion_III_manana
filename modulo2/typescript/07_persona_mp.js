"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
exports.Persona = Persona;
// Crear instancias de la clase Persona
var paciente1 = new Persona("Dr. Carlos Mendez", 45);
var paciente2 = new Persona("Enf. Ana Torres", 32);
var paciente3 = new Persona("Paciente Juan López", 28);
// Mostrar salutaciones
paciente1.saludar();
paciente2.saludar();
paciente3.saludar();
// Mostrar información específica
console.log("\n=== Informaci\u00F3n del Personal ===");
console.log("Nombre: ".concat(paciente1.nombre, ", Edad: ").concat(paciente1.edad));
console.log("Nombre: ".concat(paciente2.nombre, ", Edad: ").concat(paciente2.edad));
console.log("\n=== Informaci\u00F3n del Paciente ===");
console.log("Nombre: ".concat(paciente3.nombre, ", Edad: ").concat(paciente3.edad));
