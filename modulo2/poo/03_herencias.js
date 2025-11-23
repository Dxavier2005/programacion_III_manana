class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("Realizar algún ruido");
    }
}
class Perro extends Animal{}
const miPerro = new Perro("Firulais");
const miAnimal = new Animal('Toby');
miPerro.hacerSonido(); 
miAnimal.hacerSonido(); 