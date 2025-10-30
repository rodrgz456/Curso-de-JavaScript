// 1. Crea una variable para cada operación aritmética
let suma = 1 + 2
let resta = 1 - 2
let multiplicacion = 1 * 2
let division = 2 / 1
let modulo = 2 % 1
let exponente = 2 ** 1

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let miVarable = 2

miVarable += 2
miVarable -= 2
miVarable *= 2
miVarable /= 2
miVarable %= 2
miVarable **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
a = 2
b = 3

console.log(a < b) // true
console.log(a != b) // true
console.log(b > a) // true 
console.log(b >= a) // true
console.log(a <= b) // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b) // false
console.log(a == b) // false
console.log(b < a) // false 
console.log(b <= a) // false
console.log(a >= b) // false

// 5. Utiliza el operador lógico and
let var1 = 1
let var2 = 2

console.log(var1 != var2 && var1 < var2) //true

// 6. Utiliza el operador lógico or
console.log(var1 < var2 || var1 < var2) //true

// 7. Combina ambos operadores lógicos
console.log(var1 < var2 && var1 == var2 || var1 == var2) // false

// 8. Añade alguna negación
let var3 = true
console.log(!var3) //false

// 9. Utiliza el operador ternario
let esNiño = true
esNiño ? console.log("Es niño") : console.log("Es niña") 

// 10. Combina operadores aritméticos, de comparáción y lógicas