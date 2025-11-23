export class Paciente {
    public nombre: string;
    public tipo: string; // ejemplo: "ambulatorio", "hospitalizado"

    constructor(
        nombre: string,
        tipo: string
    ){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    registrar(): void {
        console.log(`✅ Paciente ${this.nombre} registrado como ${this.tipo}`);
    }

    mostrarInfo(): void {
        console.log(`👤 Nombre: ${this.nombre}`);
        console.log(`📋 Tipo: ${this.tipo}`);
    }
}

export class PacienteHospitalizado extends Paciente {
    public habitacion: number;
    public fechaIngreso: Date;

    constructor(nombre: string, habitacion: number) {
        super(nombre, "hospitalizado"); // Llamada al constructor padre
        this.habitacion = habitacion;
        this.fechaIngreso = new Date();
    }

    asignarHabitacion(nuevaHabitacion: number): void {
        this.habitacion = nuevaHabitacion;
        console.log(`🏥 ${this.nombre} trasladado a habitación ${nuevaHabitacion}`);
    }

    mostrarInfo(): void {
        super.mostrarInfo(); // Llamar método del padre
        console.log(`🏠 Habitación: ${this.habitacion}`);
        console.log(`📅 Fecha ingreso: ${this.fechaIngreso.toLocaleDateString()}`);
    }

    darAlta(): void {
        console.log(`🎉 ${this.nombre} dado de alta de habitación ${this.habitacion}`);
    }
}

export class PacienteAmbulatorio extends Paciente {
    public proximaCita: Date;
    public motivoConsulta: string;

    constructor(nombre: string, motivoConsulta: string, diasParaCita: number = 7) {
        super(nombre, "ambulatorio");
        this.motivoConsulta = motivoConsulta;
        this.proximaCita = new Date();
        this.proximaCita.setDate(this.proximaCita.getDate() + diasParaCita);
    }

    reprogramarCita(nuevosDias: number): void {
        this.proximaCita = new Date();
        this.proximaCita.setDate(this.proximaCita.getDate() + nuevosDias);
        console.log(`📅 Cita reprogramada para ${this.proximaCita.toLocaleDateString()}`);
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`🩺 Motivo: ${this.motivoConsulta}`);
        console.log(`📅 Próxima cita: ${this.proximaCita.toLocaleDateString()}`);
    }
}

// Demostración de herencia
console.log("=== SISTEMA DE GESTIÓN DE PACIENTES ===\n");

// Crear paciente básico
const paciente1 = new Paciente("Ana Martínez", "consulta general");
paciente1.registrar();
paciente1.mostrarInfo();
console.log("---");

// Crear paciente hospitalizado
const pacienteHosp = new PacienteHospitalizado("Carlos Ruiz", 205);
pacienteHosp.registrar();
pacienteHosp.mostrarInfo();
pacienteHosp.asignarHabitacion(301);
console.log("---");

// Crear paciente ambulatorio
const pacienteAmb = new PacienteAmbulatorio("María García", "Control rutinario", 5);
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
