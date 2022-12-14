const fs = require('fs')
const { registrar, leer } = require('./operaciones.js')

const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if (operacion === "leer") {
    leer()
    return
} else if (operacion === "registrar" & argumentos.length > 1) {
    registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5])
    return
} else {
    console.log("Error favor de intentarlo de nuevo");
    console.log("Ejemplo : node index.js leer")
    console.log("Ejemplo : node index.js registrar Peluza '2 años' perro cafe otitis")
    return
}

