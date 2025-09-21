Exercício 2: Validador de Idade (Foco em req.query e Lógica Condicional)
Objetivo: Praticar o uso de req.query, a conversão de strings para números e a aplicação de lógica condicional (if/else).

Descrição:
Crie uma rota /validar-usuario que receba dois parâmetros via query: nome e idade.
A rota deve verificar se a idade é maior ou igual a 18.

Se for, deve retornar uma mensagem de boas-vindas.

Se não for, deve retornar uma mensagem informando que o acesso é restrito.

Se o parâmetro idade ou nome não for fornecido, retorne uma mensagem de erro.

Exemplos de chamada:

GET /validar-usuario?nome=Carlos&idade=25

Resultado Esperado: Olá, Carlos! Seja bem-vindo, seu acesso foi liberado.

GET /validar-usuario?nome=Julia&idade=16

Resultado Esperado: Olá, Julia! Desculpe, seu acesso é restrito para maiores de 18 anos.

GET /validar-usuario?nome=Ana

Resultado Esperado: Erro: Por favor, informe a idade.

Para Reforçar:

Lembre-se que todo parâmetro vindo da URL é uma string. Você precisará convertê-lo para número usando parseInt() antes de fazer a comparação.

Como você verifica se um parâmetro foi realmente enviado na requisição? (Dica: if (!req.query.idade) { ... })