export class HistoriaClinica {
    public nombrePaciente: string;
    private fechaRegistro: any;
    protected idHistoria: string = 'HC-0001';

    constructor(
        nombrePaciente: string
    ) {
        this.nombrePaciente = nombrePaciente;
        this.generarFechaRegistro();
    }

    generarFechaRegistro(): void {
        this.fechaRegistro = (new Date()).toDateString();
    }

    getFechaRegistro(): any {
        return this.fechaRegistro;
    }

    getAtributes(): any {
        return {
            paciente: this.nombrePaciente,
            fechaRegistro: this.fechaRegistro,
            idHistoria: this.idHistoria
        };
    }
}

// Ejemplo de uso y demostración de modificadores de acceso
console.log("=== SISTEMA DE HISTORIAS CLÍNICAS ===\n");

// Crear instancias de historias clínicas
const historia1 = new HistoriaClinica("Juan Pérez");
const historia2 = new HistoriaClinica("María García");
const historia3 = new HistoriaClinica("Carlos López");

// Demostrar acceso público
console.log("📋 Acceso a propiedades PÚBLICAS:");
console.log(`Paciente 1: ${historia1.nombrePaciente}`);
console.log(`Paciente 2: ${historia2.nombrePaciente}`);
console.log(`Paciente 3: ${historia3.nombrePaciente}\n`);

// Demostrar acceso a métodos públicos
console.log("📅 Acceso a métodos públicos (getFechaRegistro):");
console.log(`Fecha registro Historia 1: ${historia1.getFechaRegistro()}`);
console.log(`Fecha registro Historia 2: ${historia2.getFechaRegistro()}\n`);

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
console.log(`Nombre actualizado: ${historia1.nombrePaciente}`);
