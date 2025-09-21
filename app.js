const express = require('express');
const app = express();
const PORT = 8080;

app.get('/validacao-usuarios', (req, res) => {
    
    try {
        
        const {nome, idade} = req.query;
        let idadeConvertidada = parseInt(idade);
        
        if (!nome) {
            
            return res.status(400).json('Erro: informe seu nome');
        }

        if (isNaN(idadeConvertidada)) {
            
            return res.status(400).json('Erro: Idade não e um numero ou não foi informada!');
        }

        if (idadeConvertidada < 18) {

            return res.status(403).json({message: `Olá, ${nome}! Desculpe, seu acesso é restrito para maiores de 18 anos`});
        }

        return res.status(200).json({message: `Olá, ${nome}! Seja bem-vindo(a), seu acesso foi liberado`});

    } catch (error) {
        console.error('Erro interno no servidor', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});