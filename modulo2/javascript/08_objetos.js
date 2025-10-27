console.log("----- Objetos en JavaScript -----");
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Quito"
};
console.log("Objeto persona original:", persona);
console.log("Acceso a las propiedades del objeto:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona["edad"]);
console.log("Ciudad:", persona["ciudad"]);

console.log("Modificar propiedad del objeto:");
persona.nombre = "Pedro";
console.log("Objeto persona modificado:", persona);

console.log("Incluir clave al objeto:");
persona.direccion = "Av. Occidental";
console.log("Objeto persona después de agregar una propiedad:", persona);

console.log("Eliminar clave del objeto:");
delete persona.direccion;
console.log("Objeto persona después de eliminar una propiedad:", persona);

console.log("Recorrer un Objeto:");
for (let clave in persona) {
    console.log("La clave", clave, "tiene el valor:", persona[clave]);
}

console.log("Mostrar claves con Object.keys():");
console.log(Object.keys(persona));

console.log("Mostrar valores con Object.values():");
console.log(Object.values(persona));
console.log("Objetos animados");
let estudiante = {
    nombre: "Ana",
    apellido: "Gomez",
    contacto: {
        correo: "ana.gomez@example.com",
        telefono: "123-456-7890",
        celular: {pais: "+593", numero: "987654321"}
    },
    materias: [
        {
            nombre: "Matemáticas",
            nota: 85
        },
        {
            nombre: "Física",
            nota: 90
        }
    ]
};
console.log("Objeto estudiante:", estudiante);


















