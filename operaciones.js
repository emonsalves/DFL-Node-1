const fs = require('fs')

const registrar = (nombre, edad = "no informado", tipo = "no informado", color = "no informado", diagnostico = "no informado") => {
    const file = fs.readFileSync(`citas.json`, 'utf8')
    const data = JSON.parse(file)

    const datos = {
        "nombre": nombre,
        "edad": edad,
        "animal": tipo,
        "color": color,
        "enfermedad": diagnostico
    }
    fs.writeFileSync(`citas.json`, JSON.stringify([...data, datos], null, 4))
    console.log("Cita registrada")
}

const leer = () => {
    const file = fs.readFileSync(`citas.json`, 'utf8')
    console.log(`Leyendo Archivo \n ${file}`);
}

module.exports = { registrar, leer }