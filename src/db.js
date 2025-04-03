let alunos = [];
let cursos = [];

const getAlunos = () => alunos;

const setAlunos = (aluno) => alunos.push(aluno);

exports = {
    getAlunos,
    setAlunos,
};
