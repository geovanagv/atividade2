//2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 
//1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário 
//reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.

const express = require("express");
const app = express();

app.use(express.json());
const aumento = 0.3;

app.get("/exercicio/:qtdMinima", (req, res) => {
  const salario = Number(req.params.qtdMinima);
  if (salario < 1000) {
    const calc = salario * aumento + salario;
    res.send(`salário reajustado: ${calc}`);
  } else {
    res.send(`funcionário não tem direito ao aumento`);
  }
});

app.listen(3000, () => {
  console.log("Aplicação iniciada em http://localhost:3000");
});