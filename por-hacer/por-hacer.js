const fs = require('fs');
let listadoporhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err)
            throw new error('No se pudo grabar', err);
    });
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoporhacer.push(porHacer);
    guardarDB();
    return porHacer;
}
module.exports = {
    crear
}