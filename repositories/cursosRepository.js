import { getCursos, setCursos } from "../src/db.js";


function create(curso) {
    setCursos(curso);
};

function findOne(id) {
    const cursos = getCursos();
    let resultado = cursos.find((curso) => curso.id === id);
    return resultado;
};

function findAll() {
    return getCursos();
};

function update(id, curso) {
    let cursos = getCursos();
    cursos[id - 1] = curso;

};

function destroy(id) {
    let cursos = getCursos();
    cursos.splice(id-1, 1);
};

export {
    create,
    findOne,
    findAll,
    update,
    destroy,
};