const fs = require('fs')

const registrar = (nombre, edad, tipo, color, diagnostico) => {

    const datos = [{
        "nombre": nombre,
        "edad": edad,
        "animal": tipo,
        "color": color,
        "enfermedad": diagnostico
    }]

    fs.writeFileSync(`citas.json`, JSON.stringify(datos))
    console.log("Cita registrada")

}

const leer = () => {
    const file = fs.readFileSync(`citas.json`, 'utf8')
    console.log(`Leyendo Archivo \n ${file}`);
}

module.exports = { registrar, leer }