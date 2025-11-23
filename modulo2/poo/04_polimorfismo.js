class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log("Empleaado trabajando.");
    }
    calcularVacaciones() {
        return this.salario * 0.15;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}






class Programador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;
    }
}


class Diseñador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}




const progPedro = new Programador("Pedro", 2000);
const disAna = new Diseñador("Ana", 1200);


progPedro.trabajar();
disAna.trabajar();
console.log(progPedro.calcularVacaciones());
console.log(disAna.calcularVacaciones());
console.log(progPedro.horasExtra(5));
console.log(disAna.horasExtra(5));


