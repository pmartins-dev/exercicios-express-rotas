Exercício 1: Gerador de Cumprimentos (Foco em req.params com texto)
Objetivo: Praticar o uso de req.params com dados do tipo string e reforçar a concatenação de texto na resposta.

Descrição:
Crie um projeto Express com uma única rota /cumprimentar/:nome/:saudacao.

:nome será o nome de uma pessoa.

:saudacao será uma saudação (ex: "Bom-dia", "Boa-tarde", "Bem-vindo").

A rota deve capturar esses dois parâmetros e retornar uma mensagem personalizada.

Exemplo de chamada:
GET /cumprimentar/Mariana/Bem-vinda

Resultado Esperado:
Olá, Mariana! Seja Bem-vinda!