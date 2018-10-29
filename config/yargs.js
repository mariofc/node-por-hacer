const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};


const optsAct = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: 'true',
        alias: 'c'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', opts)
    .command('listar', 'Mostrar lista de tareas', {})
    .command('actualizar', 'Actualizar el estado completado de una tarea', optsAct)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;


const colors = require('colors');


module.exports = {
    argv,
    colors
}