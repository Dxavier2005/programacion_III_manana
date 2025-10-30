class Personas{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }      

    mayorEdad() {
        if(this.edad >= 18){
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} es menor de edad`);
        }   
    }

    mostrar() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const persona1 = new Personas("Luis", 20);
persona1.mayorEdad();
persona1.mostrar();