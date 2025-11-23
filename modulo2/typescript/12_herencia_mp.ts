export class Persona {
    public nombre: string;
    public cedula: string;
    public edad: number;

    constructor(nombre: string, cedula: string, edad: number) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`👋 Hola, soy ${this.nombre}`);
    }

    mostrarInfo(): void {
        console.log(`📋 Nombre: ${this.nombre}`);
        console.log(`🆔 Cédula: ${this.cedula}`);
        console.log(`🎂 Edad: ${this.edad} años`);
    }
}

export class Doctor extends Persona {
    public especialidad: string;
    public licenciaMedica: string;
    private salario: number;

    constructor(nombre: string, cedula: string, edad: number, especialidad: string, licenciaMedica: string, salario: number) {
        super(nombre, cedula, edad);
        this.especialidad = especialidad;
        this.licenciaMedica = licenciaMedica;
        this.salario = salario;
    }

    saludar(): void {
        console.log(`👨‍⚕️ Hola, soy el Dr. ${this.nombre}, especialista en ${this.especialidad}`);
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`🩺 Especialidad: ${this.especialidad}`);
        console.log(`📄 Licencia: ${this.licenciaMedica}`);
    }

    atenderPaciente(nombrePaciente: string): void {
        console.log(`🩺 Dr. ${this.nombre} está atendiendo a ${nombrePaciente}`);
    }

    getSalario(): number {
        return this.salario;
    }
}

export class Enfermero extends Persona {
    public turno: string; // "mañana", "tarde", "noche"
    public area: string;

    constructor(nombre: string, cedula: string, edad: number, turno: string, area: string) {
        super(nombre, cedula, edad);
        this.turno = turno;
        this.area = area;
    }

    saludar(): void {
        console.log(`👩‍⚕️ Hola, soy ${this.nombre}, enfermero/a del área de ${this.area}`);
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`🕐 Turno: ${this.turno}`);
        console.log(`🏥 Área: ${this.area}`);
    }

    administrarMedicamento(paciente: string, medicamento: string): void {
        console.log(`💊 ${this.nombre} administrando ${medicamento} a ${paciente}`);
    }

    cambiarTurno(nuevoTurno: string): void {
        this.turno = nuevoTurno;
        console.log(`🔄 ${this.nombre} cambió a turno de ${nuevoTurno}`);
    }
}

export class Paciente extends Persona {
    public numeroHistoria: string;
    public tipoSeguro: string;
    private diagnostico: string;

    constructor(nombre: string, cedula: string, edad: number, tipoSeguro: string) {
        super(nombre, cedula, edad);
        this.numeroHistoria = `HC-${Math.floor(Math.random() * 10000)}`;
        this.tipoSeguro = tipoSeguro;
        this.diagnostico = "Pendiente";
    }

    saludar(): void {
        console.log(`🤒 Hola, soy ${this.nombre}, soy paciente del hospital`);
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`📋 Historia: ${this.numeroHistoria}`);
        console.log(`🏥 Seguro: ${this.tipoSeguro}`);
    }

    asignarDiagnostico(diagnostico: string): void {
        this.diagnostico = diagnostico;
        console.log(`📝 Diagnóstico asignado a ${this.nombre}: ${diagnostico}`);
    }

    getDiagnostico(): string {
        return this.diagnostico;
    }
}

// Demostración del sistema hospitalario con herencia
console.log("=== SISTEMA HOSPITALARIO CON HERENCIA ===\n");

// Crear instancias de cada tipo
const doctor1 = new Doctor("Carlos Mendez", "12345678", 45, "Cardiología", "LM-001", 5000);
const enfermera1 = new Enfermero("Ana López", "87654321", 32, "mañana", "UCI");
const paciente1 = new Paciente("Juan García", "11223344", 28, "Seguro Social");

console.log("🏥 PERSONAL Y PACIENTES DEL HOSPITAL:\n");

// Saludos polimórficos
doctor1.saludar();
enfermera1.saludar();
paciente1.saludar();

console.log("\n📋 INFORMACIÓN DETALLADA:\n");

console.log("DOCTOR:");
doctor1.mostrarInfo();
console.log(`💰 Información privada - Salario: $${doctor1.getSalario()}`);

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
