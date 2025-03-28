// let express = require('express'); -> para usar o require remover a linha "type":"modules" no package.json e apagar a linha abaixo.
import express from 'express';
let app = express();
let port = 3000;

app.use(express.json());

let alunos = [];

app.get("/alunos/listar", (_req, res) => {
    res.status(200).json(alunos);
})

app.get("/alunos/visualizar/:id", (req, res) => {
    let busca = alunos.filter((element) => element.id === parseInt(req.params.id));
    res.status(200).json(busca);
    // res.status(200).json(alunos[req.params.id - 1]);
})

app.post("/alunos/cadastrar", (req, res) => {
    console.log(req.body);
    let { nome, matricula } = req.body;
    let id = alunos.length ? alunos.at(-1).id + 1 : 1;
    let aluno = {
        id,
        nome,
        matricula
    };
    alunos.push(aluno);
    res.status(201).json(`Aluno: ${nome} cadastrado com sucesso!`);
});

app.put("/alunos/atualizarTotal/:id", (req, res) => {
    let { id } = req.params;
    let { nome, matricula } = req.body;
    
    let busca = alunos.some((aluno) => aluno.id === parseInt(req.params.id));

    if(busca) {
        alunos[id - 1] = {
            id: parseInt(id),
            nome,
            matricula
        };
        res.status(200).json(alunos[id - 1]);
    } else {
        console.log("Aluno não encontrado!");
        res.status(404).json("Aluno não encontrado!");
        console.log(busca);
    };
});

app.put("/alunos/atualizarv2/", (req, res) => {
    let { id } = req.params;
    let aluno = alunos.filter((element) => element.id === parseInt(id))
    console.log(aluno);
    res.status(200).json(aluno);

});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

