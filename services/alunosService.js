import * as alunoRepository from '../repositories/alunosRepository.js';
import { findAllCursos } from '../repositories/cursosRepository.js';

function criarAluno(aluno){
    let cursos = findAllCursos;

    let cursoExiste = cursos.find(curso => curso.id == aluno.curso_id);

    if (!cursoExiste) {
        return res.status(400).json({ error: "Curso não encontrado." });
    }

    alunoRepository.createAluno(aluno);
    return aluno;
}

function listarAlunos() {
    return alunoRepository.findAllAlunos();
}

function visualizarAluno(id) {
    return alunoRepository.findOneAluno(id);
}

function atualizarAluno(id, aluno) {
    return alunoRepository.updateAluno(id, aluno);
}


function deleterAluno(id) {
    return alunoRepository.destroyAluno(id);
}

export {
    criarAluno,
    listarAlunos,
    visualizarAluno,
    atualizarAluno,
    deleterAluno,
}
