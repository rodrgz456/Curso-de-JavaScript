// 1. Concatena dos cadenas de texto
let txt1 = "Hola"
let txt2 = "Mundo"
console.log(txt1 + " " + txt2)

// 2. Muestra la longitud de una cadena de texto
let miNombre = "Roberto"
console.log(miNombre.length)

// 3. Muestra el primer y último carácter de un string
let primer = miNombre[0]
let ultimo = miNombre[6]
console.log("primer caracter: " + primer + " ultimo caracter: " + ultimo)

// 4. Convierte a mayúsculas y minúsculas un string
let cadena = "Roberto André Rodríguez González"
console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let oracion = `Hola, 
me llamo Roberto, 
tengo 18 años`

// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre es: ${miNombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(oracion.replace(/ /g, "-")) // la expresion / /g significa todo y g es de global

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena.includes("André"))

// 9. Comprueba si dos strings son iguales
console.log(miNombre == cadena)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(miNombre.length == cadena.length)