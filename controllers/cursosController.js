import * as curosService from '../services/cursosServices.js';

function criarCurso(req, res) {
    try {
        const curso = curosService.criarCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(400).json({ "mensagem": "Erro ao criar curso."});
    }
}

function listarCursos(req, res){
    const cursos = curosService.listarCursos();
    res.status(200).json(cursos);
}

function visualizarCurso(req, res){
    const id =  parseInt(req.params.id)
    const curso = curosService.visualizarCurso(id-1);
    res.status(200).json(curso);
}

function atualizarCurso(req, res){
    const id =  parseInt(req.params.id)
    curosService.atualizarCurso(id-1, req.body);
    res.status(200).send();
}

function deleterCurso(req, res){
    const id =  parseInt(req.params.id)
    const curso = curosService.deleterCurso(id-1);
    res.status(204).send();
}

export {
    criarCurso,
    listarCursos,
    visualizarCurso,
    atualizarCurso,
    deleterCurso,
}
