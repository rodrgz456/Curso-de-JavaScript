// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "Roberto",
    edad: 18,
    sexo: "Hombre"
}

// 2. Accede y muestra su valor
for (let clave in persona){
    console.log(clave + ": " + persona[clave])
}

// 3. Agrega una nueva propiedad
persona.profesion = "Programador"

// 4. Elimina una de las 3 primeras propiedades
delete persona.sexo

// 5. Agrega una función e invócala
persona.saluda = function(){
    console.log("Hola")
}
persona.saluda()

// 6. Itera las propiedades del objeto
for (let clave in persona){
    console.log(clave + ": " + persona[clave])
}

// 7. Crea un objeto anidado
let persona2 = {
    nombre: "Julio",
    edad: 18,
    sexo: "Mujer",
    trabajo: {
        profesion: "Electronico",
        lugar: "Una empresa"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("Profesion: ", persona2.trabajo.profesion)
console.log("Lugar: ", persona2.trabajo.lugar)

// 9. Comprueba si los dos objetos creados son iguales
console.log(persona == persona2)
console.log(persona === persona2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.nombre === persona2.nombre) //false
console.log(persona.edad === persona2.edad) //true