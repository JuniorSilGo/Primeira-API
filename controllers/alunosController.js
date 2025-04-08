import * as alunosService from '../services/alunosService.js';

function criarAluno(req, res) {
    try {
        const aluno = alunosService.criarAluno(req.body);
        res.status(201).json(aluno.mensagem);
    } catch (error) {
        res.status(400).json(error.mensagem);
    }
}

function listarAlunos(_req, res) {
    const resultado = alunosService.listarAlunos();
    
    if(resultado.sucess) {
        res.status(201).json(resultado.data);
    } else {
        res.status(404).json(resultado.mensagem);
    }
}

function visualizarAluno(req, res){
    const resultado = alunosService.visualizarAluno(req.params.id);
    
    if(resultado.sucess) {
        res.status(201).json(resultado.data);
    } else {
        res.status(404).json(resultado.mensagem);
    }
}

function atualizarAluno(req, res){
    try {
        const resultado = alunosService.atualizarAluno(req.params.id, req.body);
        res.status(200).json(resultado.mensagem);
    } catch (error) {
        res.status(404).json(error.mensagem);
    }
}

function deleterAluno(req, res){
    const resultado = alunosService.deleterAluno(req.params.id);

    if(resultado.sucess) {
        res.status(200).json(resultado.mensagem);
    } else {
        res.status(404).json(resultado.mensagem);
    }
}

export {
    criarAluno,
    listarAlunos,
    visualizarAluno,
    atualizarAluno,
    deleterAluno,
}