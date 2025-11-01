// array

// Declaracion
let array = []
let array2 = new Array()

// Inicializacion
array = [1, 2, 3, 4, "Roberto", true] // se puede agregar caulquier tipo de datos
array2 = new Array(1, 2, 3, 4)

/*console.log(array)
console.log(array2)*/

// Metodos Comunes
array = []

//push y pop
array.push("Roberto") //Push sirve para agregar de manera secuencial a nuestro array
array.push("Andre")
array.push("Rodriguez")
array.push("Gonzalez")

array.pop() //Eliminar el ultimo registro de nuestro array

console.log(array)
console.log(array.pop()) //Eliminar y muestra el ultimpo registro eliminado

// shift y unshift
array.shift() // eliminar el primer registro del array, se comporta igual que pop()
console.log(array)

array.unshift("Roberto", 18) // agrega los registros al inicio de nuestro array
console.log(array)

// lenght
console.log(array.length)

// limpiar el array
array = [] // la primera forma y la mejor
array.length = 0 // la segunda forma

console.log(array)

// slice
array.push("Roberto")
array.push("Andre")
array.push("Rodriguez")
array.push("Gonzalez")

let newArray = array.slice(1, 2) // sirve para crear un nuevo array con los registro de otro segun el rango
console.log(array)
console.log(newArray)

//splice
array.splice(1, 2) // eliminar los registro del dentro del rango
console.log(array)