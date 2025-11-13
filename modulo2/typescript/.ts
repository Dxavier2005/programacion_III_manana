export class Libros {
    public titulo: string;
    public cota: any;
    protected idGeneric: string = '9918289829882';


    constructor(titulo: string, cota: any) {
        this.titulo = titulo;
        this.cota = cota;
    }


    generarCota(): void {
        this.cota = parseInt(new Date().getTime().toString() + this.idGeneric);
    }
    getCota(): any {
        return this.cota;
    }
    getAtributes(): any {
        return {
            titulo: this.titulo,
            cota: this.cota
        };
    }
    mostrarInformacion(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Cota: ${this.cota}`);
    }
}


// Ejemplo de uso
const libro1 = new Libros('Programación en TypeScript', '');
console.log(libro1.generarCota());
libro1.mostrarInformacion();







