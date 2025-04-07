// let express = require('express'); -> para usar o require remover a linha "type":"modules" no package.json e apagar a linha abaixo.
import express from 'express';
import { atualizarAluno, criarAluno, deleterAluno, listarAlunos, visualizarAluno } from '../controllers/alunosController.js';
import { atualizarCurso, criarCurso, listarCursos, deleterCurso, visualizarCurso } from '../controllers/cursosController.js';
let app = express();
let port = 3000;

app.use(express.json());

app.post("/aluno", criarAluno);
app.get("/aluno", listarAlunos);
app.get("/aluno/:id", visualizarAluno);
app.put("/alunos/:id", atualizarAluno);
app.delete("/alunos/:id", deleterAluno)

app.post("/curso", criarCurso);
app.get("/curso", listarCursos);
app.get("/curso/:id", visualizarCurso);
app.put("/cursos/:id", atualizarCurso);
app.delete("/cursos/:id", deleterCurso);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

/*

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

// ROTAS CURSOS:

let cursos = [];

app.get("/cursos/listar", (_req, res) => {
    if(cursos.length > 0) {
        res.status(200).json(cursos);
    } else {
        res.status(404).json("Não há cursos cadastrados!");
    };
})

app.get("/cursos/visualizar/:id", (req, res) => {
    let busca = cursos.find((curso) => curso.id === parseInt(req.params.id));

    if(busca) {
        res.status(200).json(busca);
    } else {
        res.status(404).json("Curso não encontrado!");
    };
})

app.post("/cursos/cadastrar", (req, res) => {
    let { nome, codigo } = req.body;
    let id = cursos.length ? cursos.at(-1).id + 1 : 1;

    if (!nome || !codigo) {
        res.status(404).json(`Os campos Nome e Código precisam ser informados!`);
    }

    let curso = {
        id,
        nome,
        codigo
    };
    cursos.push(curso);
    res.status(201).json(`ID: ${id} - Curso: ${nome} - Código: ${codigo}. Cadastrada(o) com sucesso!`);
});

app.put("/cursos/atualizarTotal/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let { nome, codigo } = req.body;

    if (!nome || !codigo) {
        res.status(404).json(`Os campos Nome e Código precisam ser informados!`);
    }
    
    let busca = cursos.find((curso) => curso.id === id);

    if(busca) {
        cursos[id - 1] = {
            id: parseInt(id),
            nome,
            codigo
        };
        res.status(200).json(`ID: ${id} - Curso: ${nome} - Código: ${codigo}. Atualizada(o) com sucesso!`);
    } else {
        res.status(404).json("Curso não encontrada(o)!");
    };
});

app.patch("/cursos/atualizarParcial/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let { nome, codigo } = req.body;

    if (!nome && !codigo) {
        res.status(404).json('Pelo menos um dos campos(Nome ou Código) precisa ser informado!');
    }
    
    let busca = cursos.find((curso) => curso.id === id);

    if(busca) {
        cursos[id - 1] = {
            ...busca,
            id: parseInt(id),
            ...req.body
        };       
        res.status(200).json(`ID: ${cursos[id - 1].id} - Curso: ${cursos[id - 1].nome} - Código: ${cursos[id - 1].codigo}. Atualizada(o) com sucesso!`);
    } else {
        res.status(404).json("Curso não encontrado!");
    };

});

app.delete("/cursos/excluir/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let verificacao = cursos.find((curso) => curso.id === id);
    let nome = verificacao ? verificacao.nome : '';

    if(verificacao){
        let busca = cursos.filter((curso) => curso.id !== id);
        cursos = busca;        
        res.status(200).json(`O curso: ${nome} foi excluído com sucesso!`);
    } else {
        res.status(404).json(`O curso com o ID: ${id} não foi encontrada(o)!`);
    };
});

// 



*/