const express = require("express");

const app = express();

const usuario = [];

function existeUsuario (request, response, next){
    
    const { email } = request.headers;

    const usuario = usuario.find(usuario => usuario.email === email);

    if (!usuario) {
        return response.status(400).json({error:"Usuario não encontrado"})
    }
    return next();

}

app.get("/pontuacao", existeUsuario, (request, response) => {
    
    return response.jason(usuario.pontuacao)
})

app.post("/pontuacao", existeUsuario, (request, response) => {
    const { pontos } = request.body;
    const { usuario } = request;

    const adicionandoPontuacao = {
        pontos: pontos + 5,
        criado_em: new Date(),
    }
    usuario.pontuacao.push(adicionandoPontuacao);
    
    return response.status(200).send();
})



app.get("/pontuacao/data", existeUsuario, (request, response) => {
    const { usuario } = request;
    const { data } = request.query;
    
    const dataFormatada = new Date(data + "00:00");
    const pontuacao = usuario.pontuacao.filter((pontuacao) => pontuacao.criado_em.toDateString() === new Date(dataFormatada).toDateString())

    return response.jason(pontuacao)
})

app.listen(3000);