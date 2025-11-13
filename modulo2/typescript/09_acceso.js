"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libros = void 0;
var Libros = /** @class */ (function () {
    function Libros(titulo, cota) {
        this.idGeneric = '9918289829882';
        this.titulo = titulo;
        this.cota = cota;
    }
    Libros.prototype.generarCota = function () {
        this.cota = parseInt(new Date().getTime().toString() + this.idGeneric);
    };
    Libros.prototype.getCota = function () {
        return this.cota;
    };
    Libros.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota
        };
    };
    Libros.prototype.mostrarInformacion = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Cota: ".concat(this.cota));
    };
    return Libros;
}());
exports.Libros = Libros;
// Ejemplo de uso
var libro1 = new Libros('Programación en TypeScript', '');
console.log(libro1.generarCota());
libro1.mostrarInformacion();
