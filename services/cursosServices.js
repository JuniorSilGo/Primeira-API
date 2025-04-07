import * as cursoRepository from '../repositories/cursosRepository.js';

function criarCurso(curso){

    cursoRepository.createCurso(curso);
    return curso;
}

function listarCursos() {
    return cursoRepository.findAllCursos();
}

function visualizarCurso(id) {
    return cursoRepository.findOneCurso(id);
}

function atualizarCurso(id, curso) {
    return cursoRepository.updateCurso(id, curso);
}


function deleterCurso(id) {
    return cursoRepository.destroyCurso(id);
}

export {
    criarCurso,
    listarCursos,
    visualizarCurso,
    atualizarCurso,
    deleterCurso,
}
