import * as alunosService from '../services/alunosService.js';

function criarAluno(req, res) {
    try {
        const aluno = alunosService.criarAluno(req.body);
        res.status(201).json(aluno);
    } catch (error) {
        res.status(400).json({ "mensagem": "Erro ao criar aluno."});
    }
}

function listarAlunos(req, res){
    const alunos = alunosService.listarAlunos();
    res.status(200).json(alunos);
}

function visualizarAluno(req, res){
    const id =  parseInt(req.params.id)
    const aluno = alunosService.visualizarAluno(id-1);
    res.status(200).json(aluno);
}

function atualizarAluno(req, res){
    const id =  parseInt(req.params.id)
    alunosService.atualizarAluno(id-1, req.body);
    res.status(200).send();
}

function deleterAluno(req, res){
    const id =  parseInt(req.params.id)
    const aluno = alunosService.deleterAluno(id-1);
    res.status(204).send();
}

export {
    criarAluno,
    listarAlunos,
    visualizarAluno,
    atualizarAluno,
    deleterAluno,
}