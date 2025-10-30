// Operadores

// Operadores Aritmeticos
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a) // Incremento

b-- // Decremento
console.log(b) 

// Operadores de Asignacion
let miVariable = 2 // Signo =

miVariable += 2 // Es lo mismo que: el valor de miVariable = miVarable + 2 y se puede hacer con todos lo operadores aritmeticos
console.log(miVariable)

// Operadores de Comparacion
console.log(a > b) // mayor que
console.log(a < b) // menor que
console.log(a >= b) // mayor o igual que
console.log(a <= b) // menor o igual que
console.log(a == b) // igual que
console.log(a === b) // igualdad por identidad (tipo y valor)
console.log(a === 6) // 6 es number y tiene el mismo valor que a
console.log(a === "6") // 6 no es number

console.log(a != 6) // Diferencia
console.log(a == "6") // Negacion

// Operadores Logicos (Comparan su valor booleano)

//and (&&)
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false

// or (||)
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true

// not (!)
console.log(!true) // false
console.log(!false) // true

// Operadores Ternarios
const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")