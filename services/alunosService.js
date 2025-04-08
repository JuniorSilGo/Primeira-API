import * as alunosRepository from '../repositories/alunosRepository.js';
import { findAll } from '../repositories/cursosRepository.js';

function criarAluno(aluno){
    const { nome, matricula, curso_id } = aluno;
    const alunos = alunosRepository.findAll();
    let id = alunos.length ? alunos.at(-1).id + 1 : 1;

    if (!nome || !matricula || !curso_id) {
        throw {sucess: false, mensagem: 'Os campos Nome, Matrícula e ID do curso precisam ser informados!'};
    }

    const buscarCurso = findAll().find(curso => curso.id == aluno.curso_id);

    if (!buscarCurso) {
        throw {sucess: false, mensagem: `Não existe curso com ID: ${curso_id} cadastrado! Para cadastrar um novo aluno é preciso um ID de curso válido!`};
    }

    let novoAluno = {
        id,
        nome,
        matricula,
        curso_id
    }

    alunosRepository.create(novoAluno);
    return {sucess: true, mensagem: `ID: ${id} - Aluna(o): ${nome} - Matrícula: ${matricula}. Cadastrada(o) com sucesso!`};
}

function listarAlunos() {
    const alunos = alunosRepository.findAll();

    if(alunos.length > 0) {
        return {sucess: true, data: alunos};
    } else {
        return {sucess: false, mensagem: 'Não há alunos cadastrados!'};
    };
}

function visualizarAluno(id) {
    const aluno = alunosRepository.findOne(parseInt(id));

    if(aluno) {
        return {sucess: true, data: aluno};
    } else {
        return {sucess: false, mensagem: `Aluna(o) não encontrada(o)! Não há aluna(o) com o ID: ${id}.`};
    };
}

// Utilizando o PUT:
function atualizarAluno(id, aluno) {
    const { nome, matricula, curso_id } = aluno
    const novoAluno = {
        id: parseInt(id),
        nome,
        matricula,
        curso_id
    };

    
    if (!nome || !matricula || !curso_id) {
        throw {sucess: false, mensagem: 'Os campos Nome, Matrícula e ID do curso precisam ser informados!'};
    }
    
    const resultado = visualizarAluno(id);

    if(resultado.sucess) {
        alunosRepository.update(parseInt(id), novoAluno);
        return {sucess: true, mensagem: `Aluna(o): ${nome} - Matrícula: ${matricula}. Atualizada(o) com sucesso!`};
    } else {
        throw {sucess: false, mensagem: `Aluna(o) não encontrada(o)! Não há aluna(o) com o ID: ${id}.`}
    }
}

// Utilizando o PATCH:
/*
function atualizarAluno(id, aluno) {
    const { nome, matricula, curso_id } = aluno
    
    if (!nome && !matricula && !curso_id) {
        throw {sucess: false, mensagem: 'Pelo menos um dos campos(Nome, Matrícula e ID do curso) precisa ser informado!'};
    }

    const resultado = visualizarAluno(id);

    const novoAluno = {
        ...resultado.data,
        id: parseInt(id),
        ...aluno
    };

    if(resultado.sucess) {
        alunosRepository.update(parseInt(id), novoAluno);
        return {sucess: true, mensagem: `Aluna(o): ${nome} - Matrícula: ${matricula}. Atualizada(o) com sucesso!`};
    } else {
        throw {sucess: false, mensagem: `Aluna(o) não encontrada(o)! Não há aluna(o) com o ID: ${id}.`}
    }
}
*/

function deleterAluno(id) {
    const resultado = visualizarAluno(id);
    let { data } = resultado

    if(resultado.sucess) {
        alunosRepository.destroy(parseInt(id));
        return {sucess: true, mensagem: `Aluna(o): ${data.nome} - Matrícula: ${data.matricula}. Atualizada(o) com sucesso!`};
    } else {
        return {sucess: false, mensagem: `Aluna(o) não encontrada(o)! Não há aluna(o) com o ID: ${id}.`}
    }
}

export {
    criarAluno,
    listarAlunos,
    visualizarAluno,
    atualizarAluno,
    deleterAluno,
}
