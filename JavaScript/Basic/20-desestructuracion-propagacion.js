
myArray = [1, 2, 3, 4]

let persona = {
    nombre: "Roberto",
    edad: 18,
    sexo: "Hombre"
}

miVariable = myArray[1]
console.log(miVariable)

miNombre = persona.nombre
console.log(miNombre)

// Desestructuracion

//Sintaxis Arrays
let [myValue0, myValue1, myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

// Sintaxis Objetos
let {nombre, edad, sexo} = persona
console.log(nombre)
console.log(edad)
console.log(sexo)

// Propagacion (...)

//Sintaxis Arrays
let myArray2 = [...myArray] //Copia
let myArray3 = [...myArray, 5, 6] //Copia el contenido del array pero le agrego mas valores
console.log(myArray3)

//Combinacion de arrays
let myArray4 =[...myArray2, ...myArray3]
console.log(myArray4)   

//Sintaxis Objetos
let persona3 = {...persona} //Copia
let persona4 = {...persona, email: "robertoandre0307@gmail.com"} //Copia pero agruega email
console.log(persona4)