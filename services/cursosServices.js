import * as cursosRepository from '../repositories/cursosRepository.js';

function criarCurso(curso){
    const { nome, codigo } = curso;
    const cursos = cursosRepository.findAll()
    let id = cursos.length ? cursos.at(-1).id + 1 : 1;

    if (!nome || !codigo) {
        throw {sucess: false, mensagem: 'Os campos Nome e Código precisam ser informados!'};
    }

    let novoCurso = {
        id,
        nome,
        codigo
    };

    cursosRepository.create(novoCurso);
    return {sucess: true, mensagem: `ID: ${id} - Curso: ${nome} - Código: ${codigo}. Cadastrado com sucesso!`};
}

function listarCursos() {
    const cursos = cursosRepository.findAll();

    if(cursos.length > 0) {
        return {sucess: true, data: cursos};
    } else {
        return {sucess: false, mensagem: 'Não há cursos cadastrados!'};
    };
}

function visualizarCurso(id) {
    const curso = cursosRepository.findOne(parseInt(id));

    if(curso) {
        return {sucess: true, data: curso};
    } else {
        return {sucess: false, mensagem: `Curso não encontrado! Não há curso com o ID: ${id}.`};
    };
}

// Utilizando o PUT:
function atualizarCurso(id, curso) {
    const { nome, codigo } = curso
    const novoCurso = {
        id: parseInt(id),
        nome,
        codigo
    };

    
    if (!nome || !codigo) {
        throw {sucess: false, mensagem: 'Os campos Nome e Código precisam ser informados!'};
    }
    
    const resultado = visualizarCurso(id);

    if(resultado.sucess) {
        cursosRepository.update(parseInt(id), novoCurso);
        return {sucess: true, mensagem: `ID: ${id} - Curso: ${nome} - Código: ${codigo}. Atualizado com sucesso!`};
    } else {
        throw {sucess: false, mensagem: `Curso não encontrado! Não há curso com o ID: ${id}.`}
    }
}

// Utilizando o PATCH:
/*
function atualizarCurso(id, curso) {
    const { nome, codigo } = curso
    
    if (!nome && !codigo) {
        throw {sucess: false, mensagem: 'Pelo menos um dos campos(Nome ou Código) precisa ser informado!'};
    }

    const resultado = visualizarCurso(id);

    const novoCurso = {
        ...resultado.data,
        id: parseInt(id),
        ...curso
    };

    if(resultado.sucess) {
        cursosRepository.update(parseInt(id), novoCurso);
        return {sucess: true, mensagem: `ID: ${id} - Curso: ${nome} - Código: ${codigo}. Atualizado com sucesso!`};
    } else {
        throw {sucess: false, mensagem: `Curso não encontrado! Não há curso com o ID: ${id}.`}
    }
}
*/

function deleterCurso(id) {
    const resultado = visualizarCurso(id);
    let { data } = resultado

    if(resultado.sucess) {
        cursosRepository.destroy(parseInt(id));
        return {sucess: true, mensagem: `ID: ${data.id} - Curso: ${data.nome} - Código: ${data.codigo}. Excluído com sucesso!`};
    } else {
        return {sucess: false, mensagem: `Curso não encontrado! Não há curso com o ID: ${id}.`}
    }
}


export {
    criarCurso,
    listarCursos,
    visualizarCurso,
    atualizarCurso,
    deleterCurso,
}
