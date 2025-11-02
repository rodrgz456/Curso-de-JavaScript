// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, 3, 4]
let [value0, value1] = myArray
console.log(value0)
console.log(value1)

console.log("------------------------------------------------")

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let colores = ["rojo"]
let [color1, color2 = "azul"] = colores
console.log(color2)

console.log("------------------------------------------------")

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
    nombre: "Roberto", 
    edad: 18, 
    sexo: "Hombre"
}

let {nombre, sexo} = persona
console.log(nombre)
console.log(sexo)

console.log("------------------------------------------------")

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let persona2 = {
    nombre: "Roberto", 
    edad: 18, 
    sexo: "Hombre"
}
let {nombre: name_, sexo: sex} = persona2

console.log(name_)
console.log(sex)

console.log("------------------------------------------------")

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let estudiante = {
    nombre: "Ana",
    direccion: {
        ciudad: "Guatemala",
        codigoPostal: 1001
    }
};

let {direccion: {ciudad, codigoPostal}} = estudiante
console.log(ciudad)
console.log(codigoPostal)

console.log("------------------------------------------------")

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]

let array3 = [...array1, ...array2]
console.log(array3)

console.log("------------------------------------------------")

// 7. Usa propagación para crear una copia de un array
let array4 = [...array1]
console.log(array4)

console.log("------------------------------------------------")

// 8. Usa propagación para combinar dos objetos en uno nuevo
let persona1 = {
    nombre: "Roberto",
    edad: 18
}

let datos = {
    telefono: "4913-8795"
}

let persona4 = {...persona1, ...datos}
console.log(persona4)

console.log("------------------------------------------------")

// 9. Usa propagación para crear una copia de un objeto
let datos2 = {...datos}
console.log(datos2)

console.log("------------------------------------------------")

// 10. Combina desestructuración y propagación
const person = {
    nombre1: "Roberto",
    edad: 18,
    pais: "Guatemala",
    profesion: "Programador"
};

// Desestructuramos una parte y propagamos el resto
const { nombre1, ...otrosDatos } = person;

console.log(nombre1);
console.log(otrosDatos);