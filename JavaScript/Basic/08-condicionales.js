// Condicionales

// if, else if, else

// if (si)
let edad = 0

if (edad >= 18) {
    console.log("Es mayor de edad!")
}

// else (sino)
if (edad >= 18) {
    console.log("Es mayor de edad!")
} else {
    console.log("Es menor de edad!")
}

// else if (si no, si)
if (edad >= 18) {
    console.log("Es mayor de edad!")
} else if (edad <= 0) {
    console.log("Esas edad no es posible!")
} else {
    console.log("Es menor de edad!")
}

// Operador ternario
edad = 18
edad ? console.log("La edad es 18") : console.log("La edad no es 18")

// switch
let dia = 0
let nombre = ""

switch (dia) {
    case 1:
        nombre = "Lunes"
        break
    case 2:
        nombre = "Martes"
        break
    case 3:
        nombre = "Miercoles"
        break
    case 4:
        nombre = "Jueves"
        break
    case 5:
        nombre = "Viernes"
        break
    case 6:
        nombre = "Sabado"
        break
    case 7:
        nombre = "Domingo"
        break
    default:
        nombre = "El dia no existe!"
}
console.log(`El dia es: ${nombre}`)