// Bucles

// for
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

console.log("--------------------------------------------------")

const numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
    console.log(`Numero: ${numeros[i]}`)
}

console.log("--------------------------------------------------")

// while
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

console.log("--------------------------------------------------")

//do while
i = 0

do {
    console.log(`Hola ${i}`)
    i++
} while(i < 5)

console.log("--------------------------------------------------")

// for of (sirve para valores iterables como arrays, Sets o Maps)
array = [1, 2, 3, 4, 5]

mySet = new Set(["Roberto", "Andre", "Rodriguez", "Gonzalez"])

myMap = new Map([
    ["nombre", "Roberto"], 
    ["correo", "robertoandre0307@gmail.com"],
    ["edad", 18]
])

for (let valor of array) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}