// const argv = require('yargs').argv;

const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de una tarea por hacer'
    }
}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de una tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        desc: 'marca como completado una tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', opts)
    .command('listar', 'lista las tareas', opts)
    .command('actualizar', 'actualiza una tarea por hacer', opts2)
    .help()
    .argv;


module.exports = {
    argv
}