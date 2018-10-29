const fs = require('fs');

let listadoPorHacer = [];

const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        console.log('Guardado');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    console.log(listadoPorHacer);
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardar();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardar();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardar();
        return true;
    }
}

const borrar_Ejemplo_Mario = (descripcion) => {
    cargarDB();

    let nuevoListado = [];
    let flag = false;

    for (let tarea of listadoPorHacer) {

        if (tarea.descripcion === descripcion) {
            flag = true;
        } else {
            let porHacer = {
                descripcion: tarea.descripcion,
                completado: tarea.completado
            }

            nuevoListado.push(porHacer);
        }

        if (flag === true) {
            listadoPorHacer = nuevoListado;
            guardar();
        }

    }

    return flag;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}