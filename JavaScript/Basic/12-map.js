// Map

// Declaracion
let myMap = new Map()

// Inicializacion
myMap = new Map([
    ["nombre", "Roberto"], 
    ["correo", "robertoandre0307@gmail.com"],
    ["edad", 18]
])

console.log(myMap)

// Metodos y propiedades

// set
myMap.set("apellido", "Rodriguez") //podemos agregar o modificar un argumento 
myMap.set("nombre", "Julio")
console.log(myMap)

// get
console.log(myMap.get("nombre")) //sirve para recuperar el valor de la clave

// has
console.log(myMap.has("nombre")) // devuelve si existe o no una clave

// delete
myMap.delete("correo") // elimina la clave indicada
console.log(myMap)

// clear
/* myMap.clear() */ // limpia el Map


// keys
console.log(myMap.keys()) // devuelve las claves del Map

// values
console.log(myMap.values()) // devuelve los valores de las claves

// size
console.log(myMap.size) // devuelve el tamaño del Map
