let alunos = [];
let cursos = [];

//Para alunos:
const getAlunos = () => alunos;

const setAlunos = (aluno) => alunos.push(aluno);

//Para cursos:
const getCursos = () => cursos;

const setCursos = (curso) => cursos.push(curso);

export {
    getAlunos,
    setAlunos,
    getCursos,
    setCursos,
};
