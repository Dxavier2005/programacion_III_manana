console.log("Operadores Aritméticos - Cálculos Clínicos");

// Valores clínicos (ejemplo: presión sistólica y diastólica)
numero1 = 120;
numero2 = 80;

console.log("Suma (ej. presión total estimada): ");
suma = numero1 + numero2;
console.log("Resultado ", suma);

console.log("Resta (diferencia entre valores clínicos): ");
resta = numero1 - numero2;
console.log("Resultado ", resta);

console.log("Multiplicación (proyección médica): ");
multiplicacion = numero1 * numero2;
console.log("Resultado ", multiplicacion);

console.log("División (relación entre parámetros): ");
division = numero1 / numero2;
console.log("Resultado ", division);

console.log("Módulo (residuo clínico): ");
modulo = numero1 % numero2;
console.log("Resultado ", modulo);

console.log("Potencia (cálculo elevado): ");
potencia = numero1 ** numero2;
console.log("Resultado ", potencia);


// Comparaciones clínicas
console.log("Operadores comparación");
console.log("Igualdad debilidad ==: ", "5" == 5);
console.log("Igualdad estricta ===: ", "5" === 5);
console.log("Desigualdad debilidad !=: ", "5" != 5);
console.log("Desigualdad estricta !==: ", "5" !== 5);
console.log("Mayor que >: ", "130" > 120); // ejemplo: presión alta
console.log("Menor que <: ", "98" < 100); // ejemplo: saturación baja
console.log("Mayor o igual que >=: ", "36" >= 36); // temperatura mínima
console.log("Menor o igual que <=: ", "90" <= 100); // pulso aceptable


// Operadores lógicos en decisiones clínicas
console.log("Operadores Lógicos");

// Ejemplo: parámetros dentro de rangos saludables
console.log("y AND &&", 98 <= 100 && 36 >= 35);

// Ejemplo: si cualquiera de los valores es aceptable
console.log("o OR ||", 98 <= 100 || 110 >= 90);

// Negación: condición no cumplida
console.log("Negación !", !(120 == 120));
