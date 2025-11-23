export class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(
            `Hola, soy ${this.nombre} y tengo ${this.edad} años.`
        );
    }
}

// Crear instancias de la clase Persona
const paciente1 = new Persona("Dr. Carlos Mendez", 45);
const paciente2 = new Persona("Enf. Ana Torres", 32);
const paciente3 = new Persona("Paciente Juan López", 28);

// Mostrar salutaciones
paciente1.saludar();
paciente2.saludar();
paciente3.saludar();

// Mostrar información específica
console.log(`\n=== Información del Personal ===`);
console.log(`Nombre: ${paciente1.nombre}, Edad: ${paciente1.edad}`);
console.log(`Nombre: ${paciente2.nombre}, Edad: ${paciente2.edad}`);
console.log(`\n=== Información del Paciente ===`);
console.log(`Nombre: ${paciente3.nombre}, Edad: ${paciente3.edad}`);
