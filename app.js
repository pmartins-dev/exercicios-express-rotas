const express = require('express');
const app = express();
const PORT = 8080;

app.get('/cumprimento/:nome/:saudacao', (req, res) => {
    
    const {nome, saudacao} = req.params;
    
    const mensagem = `${saudacao.charAt(0).toUpperCase() + saudacao.slice(1)}, ${nome}!`;
    res.send(mensagem);
    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});