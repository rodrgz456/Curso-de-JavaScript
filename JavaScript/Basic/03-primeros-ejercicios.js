// 1. Escribe un comentario en una línea
// Este es un comentario de una sola linea

// 2. Escribe un comentario en varias líneas
/* Este es 
un comentario
de varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "Este es una cadena de texto"
let entero = 18
let decimal = 3.1416
let boolean = true
let undefined 
let nullValue = null
let bigInt = 123456789987654321n
let symbol = Symbol("mysymbol")

console.log("------------------------------------------")

// 4. Imprime por consola el valor de todas las variables
console.log(string)
console.log(entero)
console.log(decimal)
console.log(boolean)
console.log(undefined)
console.log(nullValue)
console.log(bigInt)
console.log(symbol)

console.log("-------------------------------------------")

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string)
console.log(typeof entero)
console.log(typeof decimal)
console.log(typeof boolean)
console.log(typeof undefined)
console.log(typeof nullValue)
console.log(typeof bigInt)
console.log(typeof symbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = "Hola"
entero = 21
decimal = 9.81
boolean = false
bigInt = BigInt(147852963123456789)
mySymbol = Symbol("hola")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 21
entero = "String"
decimal = false
boolean = BigInt(12345689)
bigInt = Symbol("12456")
mySymbol = 45.02

console.log("------------------------------------")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringConst = "Hola Mundo!"
const enteroConst = 15
const decimalConst = 15.65
const booleanConst = false
// const undefiedConst
const nullConst = null
const symbolConst = Symbol("roberto")
const bigIntConst = 123456789987654321n

// 9. A continuación, modifica los valores de las constantes
// stringConst = "hola2"
// enteroConst = 12
// decimalConst = 57.808
// booleanConst = true
// nullConst = 123456
// symbolConst = symbolConst("julio")
// bigIntConst = 456789123546879n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse