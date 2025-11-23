export {};

// Sistema de Gestión de Personal Médico

interface PersonalMedico {
    id: number;
    nombre: string;
    especialidad: string;
    telefono?: string;
}

class HospitalManager {
    private personal: PersonalMedico[] = [];

    agregarPersonal(persona: PersonalMedico): void {
        this.personal.push(persona);
        console.log(`✅ ${persona.especialidad} ${persona.nombre} agregado al sistema`);
    }

    obtenerPersonal(): PersonalMedico[] {
        return this.personal;
    }

    buscarPorId(id: number): PersonalMedico | undefined {
        return this.personal.find(persona => persona.id === id);
    }

    buscarPorEspecialidad(especialidad: string): PersonalMedico[] {
        return this.personal.filter(persona => persona.especialidad.toLowerCase().includes(especialidad.toLowerCase()));
    }

    mostrarPersonal(): void {
        console.log("\n=== PERSONAL MÉDICO REGISTRADO ===");
        this.personal.forEach(persona => {
            console.log(`🏥 ID: ${persona.id}`);
            console.log(`👨‍⚕️ ${persona.especialidad}: ${persona.nombre}`);
            console.log(`📞 Teléfono: ${persona.telefono || 'No disponible'}`);
            console.log("---");
        });
    }
}

// Crear instancia del gestor hospitalario
const hospital = new HospitalManager();

// Agregar personal médico
const doctor1: PersonalMedico = {
    id: 1,
    nombre: "Dr. Carlos Mendez",
    especialidad: "Cardiología",
    telefono: "555-1234"
};

const doctora2: PersonalMedico = {
    id: 2,
    nombre: "Dra. Ana García",
    especialidad: "Pediatría",
    telefono: "555-5678"
};

const enfermero1: PersonalMedico = {
    id: 3,
    nombre: "Enf. Luis Torres",
    especialidad: "Enfermería"
};

const psicologa1: PersonalMedico = {
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
const pediatras = hospital.buscarPorEspecialidad("Pediatría");
pediatras.forEach(p => console.log(`- ${p.nombre}`));

console.log("\n🔍 Buscando personal con ID 3:");
const personalEncontrado = hospital.buscarPorId(3);
if (personalEncontrado) {
    console.log(`Encontrado: ${personalEncontrado.nombre} - ${personalEncontrado.especialidad}`);
}

console.log(`\n📊 Total de personal registrado: ${hospital.obtenerPersonal().length}`);