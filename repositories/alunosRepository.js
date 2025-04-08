import { getAlunos, setAlunos } from "../src/db.js";


function create(aluno) {
    setAlunos(aluno);
};

function findOne(id) {
    const alunos = getAlunos();
    let resultado = alunos.find((aluno) => aluno.id === id);
    return resultado;
};

function findAll() {
    return getAlunos();
};

function update(id, aluno) {
    let alunos = getAlunos();
    alunos[id - 1] = aluno;

};

function destroy(id) {
    let alunos = getAlunos();
    alunos.splice(id-1, 1);
};

export {
    create,
    findOne,
    findAll,
    update,
    destroy,
};