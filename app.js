// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const colors = require('./config/yargs').colors;

const porHacer = require('./por-hacer/por-hacer');


console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======== Listado  ========'.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('=========================='.green);
        }
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizado: ', actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log('Borrar: ', borrar);
        break;
    default:
        console.log('Comando no es reconocido');
}