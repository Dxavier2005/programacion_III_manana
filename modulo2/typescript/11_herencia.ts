export class Vehiculo {
    public marca: string;
    public tipo: string;
    constructor( 
        marca: string,
        tipo: string
    ){
        this.marca=marca;
        this.tipo=tipo;
        
    }
    moverse(): void{
        console.log('vehiculo en movimiento');
    }
}

export class Moto extends Vehiculo {}

export class Paciente {
    public nombre: string;
    public tipoPaciente: string;
    
    constructor(nombre: string, tipoPaciente: string) {
        this.nombre = nombre;
        this.tipoPaciente = tipoPaciente;
    }
    
    registrar(): void {
        console.log(`Paciente ${this.nombre} registrado como ${this.tipoPaciente}`);
    }
}