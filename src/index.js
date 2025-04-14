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
