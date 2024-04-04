//5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

//• Salários até 2.000, reajuste de 50%
//• Salários maiores que 2.000, reajuste de 30%

const express = require('express');
const app = express();

app.get('/salario/:salario1', (req,res) => {
  const salario = Number(req.params.salario1);
  if (salario <= 2000){
    const salario_reajustado = salario * 1.5;
    res.send(`Salário reajustado: ${salario_reajustado}`);
  } else {
    const salario_reajustado2 = salario * 1.3;
    res.send(`Salário reajustado: ${salario_reajustado2}`);
  }
});

app.listen(3000,() =>{
  console.log('aplicação iniciada em http://localhost:3000');
});