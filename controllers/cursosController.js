import * as curosService from '../services/cursosServices.js';

function criarCurso(req, res) {
    try {
        const curso = curosService.criarCurso(req.body);
        res.status(201).json(curso.mensagem);
    } catch (error) {
        res.status(400).json(error.mensagem);
    }
}

function listarCursos(_req, res){
    const resultado = curosService.listarCursos();
    
    if(resultado.sucess) {
        res.status(201).json(resultado.data);
    } else {
        res.status(404).json(resultado.mensagem);
    }
}

function visualizarCurso(req, res){
    const resultado = curosService.visualizarCurso(req.params.id);

    if(resultado.sucess) {
        res.status(200).json(resultado.data);
    } else {
        res.status(404).json(resultado.mensagem);
    }
}

function atualizarCurso(req, res){
    try {
        const resultado = curosService.atualizarCurso(req.params.id, req.body);
        res.status(200).json(resultado.mensagem);
    } catch (error) {
        res.status(404).json(error.mensagem);
    }
}

function deleterCurso(req, res){
    const resultado = curosService.deleterCurso(req.params.id);

    if(resultado.sucess) {
        res.status(200).json(resultado.mensagem);
    } else {
        res.status(404).json(resultado.mensagem);
    }
}

export {
    criarCurso,
    listarCursos,
    visualizarCurso,
    atualizarCurso,
    deleterCurso,
}
