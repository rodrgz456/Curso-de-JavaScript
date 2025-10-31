// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Roberto"

if (nombre == "Roberto") {
    console.log(nombre)
}

console.log("-------------------------------------------------------------------")

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "rodz"
let contraseña = "roberto0307@"

if (usuario == "rodz" && contraseña == "roberto0307@") {
    console.log(`El usuario es: ${usuario}, La contraseña es: ${contraseña}`)
} else {
    console.log("El usuario o la contraseña no son correctos!")
}

console.log("-------------------------------------------------------------------")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -1

if (numero > 0) {
    console.log("EL numero es positivo")
} else if (numero < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}

console.log("-------------------------------------------------------------------")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 4
let resultado = 18 - edad

if (edad >= 18) {
    console.log("Es mayor de edad, si puede votar!")
} else if (edad <= 0) {
    console.log("Esta edad no es posible!")
} else {
    console.log(`No es mayor de edad, le faltan ${resultado} para votar`)
}

console.log("-------------------------------------------------------------------")

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 = 18
edad2 >= 18 ? console.log("Adulto") : console.log("Menor")

console.log("-------------------------------------------------------------------")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2
let estacion

if (mes >= 3 && mes <= 6) {
    estacion = "Primavera"
} else if (mes >= 7 && mes <= 9) {
    estacion = "Verano"
} else if (mes >= 10 && mes <= 12) {
    estacion = "Otoño"
} else if (mes >= 1 && mes <= 2) {
    estacion = "Invierno"
} else if (mes <= 0) {
    estacion = "Este mes no existe!"
}
console.log(estacion)

console.log("-------------------------------------------------------------------")

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias 

if (mes == 1) {
    dias = "Enero tiene 31 dias"
} else if (mes == 2) {
    dias = "Febrero tiene 28 dias"
} else if (mes == 3) {
    dias = "Marzo tiene 31 dias"
} else if (mes == 4) {
    dias = "Abril tiene 30 dias"
} else if (mes == 5) {
    dias = "Mayo tiene 31 dias"
} else if (mes == 6) {
    dias = "Junio tiene 30 dias"
} else if (mes == 7) {
    dias = "Julio tiene 31 dias"
} else if (mes == 8) {
    dias = "Agosto tiene 31 dias"
} else if (mes == 9) {
    dias = "Septiembre tiene 30 dias"
} else if (mes == 10) {
    dias = "Octubre tiene 31 dias"
} else if (mes == 11) {
    dias = "Novienbre tiene 30 dias"
} else if (mes == 12) {
    dias = "Diciembre tiene 31 dias"
} else if (mes <= 0) {
    dias = "Estes mes no existe!"
} 
console.log(dias)

console.log("-------------------------------------------------------------------")

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Español"

switch (idioma) {
    case "Español":
        console.log("Hola, como estas!")
        break
    case "Ingles":
        console.log("Hello, what's up!")
        break
    default:
        console.log("Este idioma no es posible!")
}
console.log("-------------------------------------------------------------------")

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 1: 
        console.log("Invierno")
        break
    case 2: 
        console.log("Invierno")
        break
    case 3: 
        console.log("Primavera")
        break
    case 4: 
        console.log("Primavera")
        break
    case 5: 
        console.log("Primavera")
        break
    case 6: 
        console.log("Verano")
        break
    case 7: 
        console.log("Verano")
        break
    case 8: 
        console.log("Verano")
        break
    case 9: 
        console.log("Otoño")
        break
    case 10: 
        console.log("Otoño")
        break
    case 11: 
        console.log("Otoño")
        break
    case 12: 
        console.log("Invierno")
        break
    default:
        console.log("Este mes no existe!")
}

console.log("-------------------------------------------------------------------")

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 1: 
        console.log("Enero tiene 31 dias")
        break
    case 2: 
        console.log("Febrero tiene 31 dias")
        break
    case 3: 
        console.log("Marzo tiene 31 dias")
        break
    case 4: 
        console.log("Abril tiene 31 dias")
        break
    case 5: 
        console.log("Mayo tiene 31 dias")
        break
    case 6: 
        console.log("Junio tiene 31 dias")
        break
    case 7: 
        console.log("Julio tiene 31 dias")
        break
    case 8: 
        console.log("Agosto tiene 31 dias")
        break
    case 9: 
        console.log("Septiembre tiene 31 dias")
        break
    case 10: 
        console.log("Octubre tiene 31 dias")
        break
    case 11: 
        console.log("Noviembre tiene 30 dias")
        break
    case 12: 
        console.log("Enero tiene 31 dias")
        break
    default:
        console.log("Este mes no existe!")
}
