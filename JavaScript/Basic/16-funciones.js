// Funciones

function myFunction() {
    console.log("Hola Mundo")
}

for (let i = 1; i <= 5; i++) {
    myFunction()
}

// Con parametros

function conParametros(nombre) {
    console.log(`Hola, ${nombre}`)
}

conParametros("Roberto")

// Funciones anonimas
const myFunc2 = function(nombre){
    console.log(`Hola, ${nombre}`)
}
myFunc2("Julio")

// Arrow functions
const myFunc3 = (nombre) => {
    console.log(`Hola, ${nombre}`)
}
myFunc3("Luz")

// Parametros
function suma(a, b){
    console.log(a +b)
}
suma(5, 10)

// Retorno de valores
function multi(a, b) {
    return a * b
}
multi(5, 10)

//Funciones anidadas
function extern(){
    console.log("Funcion Externa")

    function intern(){
        console.log("Funcion Interna")
    }

    intern()
}

extern()

//Funciones de orden superior
function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc3, "Funcion de orden superior")

// forEach
myArray = [1, 2, 3, 4]

myArray.forEach((value) => console.log(value))

myArray.forEach(function (value) {
    console.log(value)
})