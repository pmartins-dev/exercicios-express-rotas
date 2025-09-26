const express = require('express');
const app = express();
const PORT = 8080;
const fs = require('fs');

//Lendo o arquivo JSON e convertendo para objeto JS
const listaProdutos = JSON.parse(fs.readFileSync('./produtos.json', 'utf-8'));

app.get('/produtos/:id', (req, res) => {
    
    try {

        //Lendo e converte o ID que vem da URL
        const idProduto = parseInt(req.params.id);

        const produtoEncontrado = listaProdutos.find(produto => produto.id === idProduto);

        if (produtoEncontrado) {

            return res.status(200).json(produtoEncontrado);
            
        } else {

            return res.status(404).json({message: "Produto não encotrado!"})

        }
        

    } catch (error) {

        console.error('Erro ao ler arquivo JSON', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
        
    }
    
});

app.get('/produtos', (req, res)=>{

    try {
        
        let produtosParaEnviar = listaProdutos;

        const {categoria} = req.query;

        if (categoria) {

             produtosParaEnviar = listaProdutos.filter(produto =>
                produto.categoria.toLowerCase() // converte para minusculo 
                    .includes(categoria.toLowerCase()))
            
        }

        res.status(200).json(produtosParaEnviar)

    } catch (error) {
        
        console.error('Erro ao ler arquivo JSON', error);
        res.status(500).json({ message: 'Erro interno no servidor' });

    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});