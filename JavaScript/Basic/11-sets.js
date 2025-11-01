// set

// Declaracion
let mySet = new Set()

// Inicializacion
mySet = new Set(["Roberto", "Andre", "Rodriguez", "Gonzalez"])
console.log(mySet)

//Metodos Comunes

//add y delete
mySet.add("Julio") //Agregar al set
mySet.delete("Julio") //Elimina el registro pero con el argumento 
console.log(mySet)

// has
console.log(mySet.has("Roberto")) // Verifica si el argumento existe en el Set

// size 
console.log(mySet.size) // Devulve el tamaño de nuestro Set

//Convertir un Set a Array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un Array a Set
mySet = new Set(myArray)
console.log(mySet)

// El Set no admite duplicados, mientras que el Array si    