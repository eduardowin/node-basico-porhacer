// const argv = require('yargs').argv;
const colors = require('colors')
const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log(argv.descripcion);

        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = getListado();
        for (const tarea of listado) {
            console.log('=====Por Hacer===='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=================='.green);

        }
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log('actualiza una tarea por hacer');
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion, argv.completado);
        console.log('borrado' + borrado);
        break;
    default:
        console.log('Comando no reconocido');

}