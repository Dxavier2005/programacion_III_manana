// Exportar algo para hacer este archivo un módulo y evitar conflictos globales
export {};

let edad: number = 30;
let nombre: string = "Juan";
let esEstudiante: boolean = true;
let valor: any = 6;

if (edad>18 && esEstudiante) {
    console.log(`trabajador activo`);

}else{
    console.log(`No trabaja`);

}

let frutas: string[] = ["Manzana", "Banana", "Cereza"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

enum Estado {
    Pendiente,
    Enviado,
    Entregado
}

console.log(Estado);
console.log(Estado.Entregado);    