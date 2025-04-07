import { getAlunos, setAlunos } from "../src/db.js";


function createAluno(aluno) {
    setAlunos(aluno);
};

function findOneAluno(id) {
    return getAlunos()[id-1];
};

function findAllAlunos() {
    return getAlunos();
};

function updateAluno(id, aluno) {
    let alunos = getAlunos();
    alunos[id - 1] = aluno;

};

function destroyAluno(id) {
    // let busca = getAlunos().filter((aluno) => aluno.id !== id);
    // alunos = busca;
    let alunos = getAlunos();
    alunos.splice(id-1, 1);
};

export {
    createAluno,
    findOneAluno,
    findAllAlunos,
    updateAluno,
    destroyAluno,
};