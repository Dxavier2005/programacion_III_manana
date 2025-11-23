
export {};

function saludarPaciente(nombre: string): string {
    return `Bienvenido paciente ${nombre}`;
}

console.log(saludarPaciente('Juan Pérez'));

function calcularIMCFunc(peso: number, altura: number): number {
    return peso / (altura * altura);
}
console.log(calcularIMCFunc(70, 1.75)); 

function mostrarMensajeIngresoPaciente(): void {
    console.log(`Paciente registrado correctamente`);
    console.log(`Historia clínica generada`);
}
mostrarMensajeIngresoPaciente();

function calcularDosis(peso: number): number {
    return peso * 0.02; 
}

function imprimirDosisPaciente(peso: number): void {
    const dosis = calcularDosis(peso);
    console.log(`La dosis recomendada es: ${dosis} mg`);
}

console.log(calcularDosis(70));
imprimirDosisPaciente(70);
