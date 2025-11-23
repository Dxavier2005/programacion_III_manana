"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriaClinica = exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo) {
        this.idGeneric = '991828982988';
        this.titulo = titulo;
        this.generarCota();
    }
    Libro.prototype.generarCota = function () {
        this.cota = (new Date()).toDateString();
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    Libro.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return Libro;
}());
exports.Libro = Libro;
var HistoriaClinica = /** @class */ (function () {
    function HistoriaClinica(nombrePaciente) {
        this._nombrePaciente = nombrePaciente;
        this._fechaRegistro = new Date();
    }
    Object.defineProperty(HistoriaClinica.prototype, "nombrePaciente", {
        get: function () {
            return this._nombrePaciente;
        },
        enumerable: false,
        configurable: true
    });
    HistoriaClinica.prototype.getFechaRegistro = function () {
        return this._fechaRegistro.toLocaleDateString();
    };
    HistoriaClinica.prototype.getAtributes = function () {
        return {
            nombrePaciente: this._nombrePaciente,
            fechaRegistro: this._fechaRegistro
        };
    };
    return HistoriaClinica;
}());
exports.HistoriaClinica = HistoriaClinica;
