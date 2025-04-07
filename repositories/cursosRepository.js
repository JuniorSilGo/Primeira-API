import { getCursos, SetCursos } from "../src/db.js";


function createCurso(curso) {
    SetCursos(curso);
};

function findOneCurso(id) {
    return getCursos()[id-1];
};

function findAllCursos() {
    return getCursos();
};

function updateCurso(id, curso) {
    let cursos = getCursos();
    cursos[id - 1] = curso;

};

function destroyCurso(id) {
    // let busca = getAlunos().filter((aluno) => aluno.id !== id);
    // alunos = busca;
    let cursos = getCursos();
    cursos.splice(id-1, 1);
};

export {
    createCurso,
    findOneCurso,
    findAllCursos,
    updateCurso,
    destroyCurso,
};