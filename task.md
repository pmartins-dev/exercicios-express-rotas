# Exercício 3:
Mini E-commerce (Combinando req.params e req.query + Retorno em JSON)
Objetivo: Simular um cenário mais realista, trabalhando com uma pequena lista de dados, combinando os dois tipos de parâmetros e retornando dados no formato JSON.

Descrição:
No seu arquivo app.js (ou index.js), crie um array de objetos para simular um banco de dados de produtos:

Agora, crie duas rotas:

1. Rota para buscar um produto por ID (req.params):

Crie a rota /produtos/:id.

Ela deve usar o ID do parâmetro para encontrar o produto correspondente no array.

Se encontrar, deve retornar o objeto do produto em formato JSON.

Se não encontrar, deve retornar uma mensagem de erro.

Exemplo de chamada: GET /produtos/3
Resultado Esperado (JSON):

2. Rota para filtrar produtos (req.query):

Crie a rota /produtos.

Esta rota poderá receber um parâmetro opcional via query chamado categoria.

Se a query categoria for enviada, a rota deve filtrar e retornar apenas os produtos daquela categoria, em formato JSON.

Se a query não for enviada, a rota deve retornar todos os produtos do array.

Exemplo de chamada: GET /produtos?categoria=perifericos
Resultado Esperado (JSON):