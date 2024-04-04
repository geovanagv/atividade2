/* Questão 01
Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
const express = require("express");*/

const app = express();

app.use(express.json());

app.get('/estoquemed', (req, res)=>{
    const quantidadeMinima = Number(req.query.qtdMinima)
    const quantidadeMaxima = Number(req.query.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
});

app.listen(3000, () => {
  console.log("Aplicação iniciada em http://localhost:3000");
});