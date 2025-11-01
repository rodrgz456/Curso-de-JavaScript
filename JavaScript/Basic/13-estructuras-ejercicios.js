// 1. Crea un array que almacene cinco animales
let animales = ["Gato", "Perro", "Iguana", "Pajaro", "Vaca"]

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Caballo") //Inicio
animales.push("Lagartija") //Final
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1) // Apartir de la posicion 3 elimina 1 registro

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Libro1") //Repetido, por ende no lo guarda
mySet.add("Libro6")

// 6. Elimina uno concreto a tu elección
mySet.delete("Libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Noviembre"],
    [11, "Octubre"],
    [12, "Diciembre"]
])
console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log("El mes número 5 es:", meses.get(5))
} else {
    console.log("El mes número 5 no existe en el mapa.")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = [1, 2, 3, 4, 5]
let mySet2 = new Set(myArray)
let mapa = new Map()

mapa.set("numeros", mySet2)
console.log(mapa)