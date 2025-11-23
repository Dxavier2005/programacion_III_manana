export class Libro {
    public titulo: string;
    private cota: any;
    protected idGeneric: string='991828982988';
    constructor( 
        titulo: string
    ){
        this.titulo=titulo;
        this.generarCota()
    }
    generarCota(): void{
        this.cota = (new Date()).toDateString();
    }
    getCota():any {
        return this.cota;
    }
    getAtributes():any {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        }
    }
}

export class HistoriaClinica {
    private _nombrePaciente: string;
    private _fechaRegistro: Date;

    constructor(nombrePaciente: string) {
        this._nombrePaciente = nombrePaciente;
        this._fechaRegistro = new Date();
    }

    get nombrePaciente(): string {
        return this._nombrePaciente;
    }

    getFechaRegistro(): string {
        return this._fechaRegistro.toLocaleDateString();
    }

    getAtributes(): object {
        return {
            nombrePaciente: this._nombrePaciente,
            fechaRegistro: this._fechaRegistro
        };
    }
}