// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i < 21; i++) {
    console.log(i)
}

console.log("--------------------------------------------------")

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let numero = 0

for (let i = 0; i < 101; i++) {
    numero += i
}
console.log(numero)

console.log("--------------------------------------------------")

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i < 51; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("--------------------------------------------------")

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Roberto", "Julio", "Luz", "Nuria"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

console.log("--------------------------------------------------")

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = "aeiouAEIOU"
let palabra = "Roberto"
let contador = 0

for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
        contador++
    }
}
console.log(`La palabra ${palabra} tiene ${contador} vocales`)

console.log("--------------------------------------------------")

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5]
let resultado = 1

for (let i = 0; i < numeros.length; i++) {
    resultado *= numeros[i]
}
console.log(`El resultado es: ${resultado}`)

console.log("--------------------------------------------------")

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let multiplicacion = 5

for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${multiplicacion * i}`)
}

console.log("--------------------------------------------------")

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Roberto"
let invertido  = ""


for (let i = cadena.length - 1; i >= 0  ; i--){
    invertido += cadena[i]
}
console.log(`La cadena invertidad es: ${invertido}`)

console.log("--------------------------------------------------")


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num1 = 0
let num2 = 1

for (let i = 1; i <= 10; i++){
    console.log(num1)
    let siguiente = num1 + num2
    num1 = num2
    num2 = siguiente
}

console.log("--------------------------------------------------")

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numArray = [3, 15, 8, 22, 7, 14, 30];
let mayores = [];

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 10) {
        mayores.push(numArray[i])
    }
}

console.log("Numeros mayores a 10: ", mayores)