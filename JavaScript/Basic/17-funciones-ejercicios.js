// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(num1 = 0, num2 = 0) {
    console.log(num1 + num2)
}
suma(1, 2)

console.log("--------------------------------------------------")

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numMayor(numeros){
    let mayor = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }

    return mayor
}

let lista = [1, 2, 3, 4]
console.log("El numero mayor es: ", numMayor(lista))

console.log("--------------------------------------------------")

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene


function numVocales(cadena) {
    let vocales = "aeiouAEIOU"
    let contador = 0

    for (let i = 0; i < cadena.length; i++){
        if (vocales.includes(cadena[i])) {
            contador += 1
        }
    }
    return contador
}

console.log("La cadena tiene: ", numVocales("Luz"))

console.log("--------------------------------------------------")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirMayusculas(array){
    let resultado = []

    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i].toUpperCase())
    }

    return resultado
}

let palabras = ["hola", "mundo", "javascript"];
console.log("Palabras en mayusculas: ", convertirMayusculas(palabras))

console.log("--------------------------------------------------")

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numerosPrimos(numero) {
    if (numero < 1) return false

    for (let i = 2; i < numero; i++){
        if (numero % i === 0) {
            return false
        }
    }

    return true
}

console.log(numerosPrimos(10))

console.log("--------------------------------------------------")

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function enComun(array1, array2) {
    let comun = []

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            comun.push(array1[i])
        }
    }

    return comun
}
let a = [1, 2, 3, 4]
let b = [3, 2, 5, 0]
console.log("En comun: ", enComun(a, b))

console.log("--------------------------------------------------")

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumPares(arrayNum) {
    let sumaPares = 0;

    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 == 0) {
            sumaPares += arrayNum[i]
        }
    }
    return sumaPares
}

let ejemplo = [1, 2, 3, 4]
console.log("El resultado de la suma es: ", sumPares(ejemplo))

console.log("--------------------------------------------------")

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numElevado(elevadoArray) {
    let numerosElevados = []

    for (let i = 0; i < elevadoArray.length; i++) {
        numerosElevados.push(elevadoArray[i] ** 2) 
    }
    return numerosElevados
}
let elevados = [1, 2, 3, 4]
console.log("Numeros elevados: ", numElevado(elevados))

console.log("--------------------------------------------------")

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(texto) {
    return texto.split(" ").reverse().join(" ");
}

let frase = "Hola mundo desde JavaScript";
console.log(invertirPalabras(frase));

console.log("--------------------------------------------------")

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
    let resultado = 1

    for (let i = 1; i <= num; i++) {
        resultado *= i
    }
    return resultado
}

console.log("El resultado es: ", factorial(4))