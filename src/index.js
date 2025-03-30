// let express = require('express'); -> para usar o require remover a linha "type":"modules" no package.json e apagar a linha abaixo.
import express from 'express';
let app = express();
let port = 3000;

app.use(express.json());

// ROTAS ALUNOS:

let alunos = [];

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
        res.status(404).json(`Os campos nome e matricula precisam ser informados!`);
    }

    let aluno = {
        id,
        nome,
        matricula
    };
    alunos.push(aluno);
    res.status(201).json(`ID: ${id} - Aluna(o): ${nome} - Matricula ${matricula}. Cadastrada(o) com sucesso!`);
});

app.put("/alunos/atualizarTotal/:id", (req, res) => {
    let { id } = req.params;
    let { nome, matricula } = req.body;

    if (!nome || !matricula) {
        res.status(404).json(`Os campos nome e matricula precisam ser informados!`);
    }
    
    let busca = alunos.find((aluno) => aluno.id === parseInt(req.params.id));

    if(busca) {
        alunos[id - 1] = {
            id: parseInt(id),
            nome,
            matricula
        };
        res.status(200).json(`ID: ${id} - Aluna(o): ${nome} - Matricula: ${matricula}. Atualizada(o) com sucesso!`);
    } else {
        res.status(404).json("Aluna(o) não encontrada(o)!");
    };
});

app.patch("/alunos/atualizarParcial/:id", (req, res) => {
    let { id } = req.params;
    let { nome, matricula } = req.body;

    if (!nome && !matricula) {
        res.status(404).json('Pelo menos um dos campos(Nome ou Matricula) precisa ser informado!');
    }
    
    let busca = alunos.find((aluno) => aluno.id === parseInt(req.params.id));

    if(busca) {
        alunos[id - 1] = {
            ...busca,
            ...req.body
        };       
        res.status(200).json(`ID: ${alunos[id - 1].id} - Aluna(o): ${alunos[id - 1].nome} - Matricula: ${alunos[id - 1].matricula}. Atualizada(o) com sucesso!`);
    } else {
        res.status(404).json("Aluna(o) não encontrado!");
    };

});

// ROTAS CURSOS:

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

