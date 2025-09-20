const express = require('express');
const app = express();
const PORT = 8080;

app.get('/cumprimento/:nome', (req, res) => {
    
    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});