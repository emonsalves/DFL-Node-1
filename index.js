const fs = require('fs')
const { registrar, leer } = require('./operaciones.js')

const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

operacion === "leer" ? leer() : null
operacion === "registrar" ? registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5]) : null