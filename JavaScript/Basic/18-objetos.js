// Objetos

//Sintaxis

let persona = {
    nombre: "Roberto",
    edad: 18,
    sexo: "Hombre"
}

//Acceso a propiedades

//Notacion punto
console.log(persona.nombre)

//Notacion de corchetes
console.log(persona["nombre"])

//Modificacion
persona.nombre = "Julio"
console.log(persona.nombre)

persona.edad = "18"
console.log(typeof persona.edad)

//Eliminar propiedades
delete persona.edad
console.log(persona)

//Nueva propiedad
persona.email = "robertoadre0307@gmail.com"
persona["edad"] = 18
console.log(persona)

//Metodos
let persona2 = {
    nombre: "Roberto",
    edad: 18,
    sexo: "Hombre", 
    saludar: function () {
        console.log("Hola")
    }
}   
persona2.saludar()

//Anidacion de objetos
let persona3 = {
    nombre: "Roberto",
    edad: 18,
    sexo: "Hombre", 
    saludar: function () {
        console.log("Hola")
    },
    trabajo: {
        nombre: "Programador",
        exp: "5 años",
        saludar: function () {
            console.log("Hola")
        }
    }
}  
console.log(persona3)

//Iteracion
//Por claves
for (let valor in persona) {
    console.log(valor)
}

//Por claves y valores
for (let clave in persona) {
    console.log(clave + ":" + persona[clave])
}

//Funciones como objetos
function Person(nombre, edad) { //Deberia de ser una clase
    this.nombre = nombre, 
    this.edad = edad
}

let persona4 = new Person("Roberto", 19)
console.log(persona4)