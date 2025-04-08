// let express = require('express'); -> para usar o require remover a linha "type":"modules" no package.json e apagar a linha abaixo.
import express from 'express';
import { atualizarAluno, criarAluno, deleterAluno, listarAlunos, visualizarAluno } from '../controllers/alunosController.js';
import { atualizarCurso, criarCurso, listarCursos, deleterCurso, visualizarCurso } from '../controllers/cursosController.js';
let app = express();
let port = 3000;

app.use(express.json());

app.post("/aluno", criarAluno);
app.get("/alunos", listarAlunos);
app.get("/aluno/:id", visualizarAluno);
app.put("/aluno/:id", atualizarAluno);
app.delete("/aluno/:id", deleterAluno)

app.post("/curso", criarCurso);
app.get("/cursos", listarCursos);
app.get("/curso/:id", visualizarCurso);
app.put("/curso/:id", atualizarCurso);
app.delete("/curso/:id", deleterCurso);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



// ROTAS ALUNOS:

let alunos = [];

/*

app.get("/alunos/listar", (_req, res) => {
    if(alunos.length > 0) {
        res.status(200).json(alunos);
    } else {
        res.status(404).json("Não há alunos cadastrados!");
    };
})

app.get("/alunos/visualizar/:id", (req, res) => {
    let busca = alunos.find((aluno) => aluno.id === parseInt(req.params.id));

    if(busca) {
        res.status(200).json(busca);
    } else {
        res.status(404).json("Aluna(o) não encontrada(o)!");
    };
})

app.post("/alunos/cadastrar", (req, res) => {
    let { nome, matricula } = req.body;
    let id = alunos.length ? alunos.at(-1).id + 1 : 1;

    if (!nome || !matricula) {
        res.status(404).json(`Os campos Nome e Matrícula precisam ser informados!`);
    }

    let aluno = {
        id,
        nome,
        matricula
    };
    alunos.push(aluno);
    res.status(201).json(`ID: ${id} - Aluna(o): ${nome} - Matrícula: ${matricula}. Cadastrada(o) com sucesso!`);
});

app.put("/alunos/atualizarTotal/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let { nome, matricula } = req.body;

    if (!nome || !matricula) {
        res.status(404).json(`Os campos Nome e Matrícula precisam ser informados!`);
    }
    
    let busca = alunos.find((aluno) => aluno.id === id);

    if(busca) {
        alunos[id - 1] = {
            id: parseInt(id),
            nome,
            matricula
        };
        res.status(200).json(`ID: ${id} - Aluna(o): ${nome} - Matrícula: ${matricula}. Atualizada(o) com sucesso!`);
    } else {
        res.status(404).json("Aluna(o) não encontrada(o)!");
    };
});

app.patch("/alunos/atualizarParcial/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let { nome, matricula } = req.body;

    if (!nome && !matricula) {
        res.status(404).json('Pelo menos um dos campos(Nome ou Matrícula) precisa ser informado!');
    }
    
    let busca = alunos.find((aluno) => aluno.id === id);

    if(busca) {
        alunos[id - 1] = {
            ...busca,
            id: parseInt(id),
            ...req.body
        };       
        res.status(200).json(`ID: ${alunos[id - 1].id} - Aluna(o): ${alunos[id - 1].nome} - Matrícula: ${alunos[id - 1].matricula}. Atualizada(o) com sucesso!`);
    } else {
        res.status(404).json("Aluna(o) não encontrado!");
    };

});

app.delete("/alunos/excluir/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let verificacao = alunos.find((aluno) => aluno.id === id);
    let nome = verificacao ? verificacao.nome : '';

    if(verificacao){
        let busca = alunos.filter((aluno) => aluno.id !== id);
        alunos = busca;        
        res.status(200).json(`O aluno: ${nome} foi excluído com sucesso!`);
    } else {
        res.status(404).json(`A(O) Aluna(o) com o ID: ${id} não foi encontrada(o)!`);
    };
});

*/