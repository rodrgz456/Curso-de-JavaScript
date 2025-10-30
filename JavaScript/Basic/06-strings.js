// Strings

let miNombre = "Roberto"
let saludo = "Hola, " + miNombre + "!"

console.log(saludo)

// Longitud
console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[0])
console.log(saludo[7])

// Metodos Comunes
console.log(saludo.toUpperCase()) // Pone todo en mayusculas
console.log(saludo.toLowerCase()) // Pone todo en minusculas
console.log(saludo.indexOf("Roberto")) // Busca la posicion en donde empieza la palabra
console.log(saludo.includes("Roberto")) // Busca si existe la palabra en la cadena de texto
console.log(saludo.slice(0, 4)) // Solo los caracteres en el rango
console.log(saludo.replace("Roberto", "Julio")) // Reemplaza los carateres por otros

// Templates literals (platillas literales)
let mensaje = `Hola mi nombre es 
Roberto André
tengo 18 años`

let email = "robertoandre0307@gmail.com"
console.log(`Hola, ${miNombre}!, tu email es: ${email}`) // simpre se usa las ``