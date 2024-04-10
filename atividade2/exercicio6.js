//6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
//• peso ideal de homem = (72,7 x altura) – 58
//• peso ideal da mulher = (62,1 x altura) – 44,7

const express = require('express');
const app = express();
app.use(express.json());

app.get('/pesoideal/:sexo/:altura', (req,res) =>{
  const sexo = (req.params.sexo);
  const altura = Number(req.params.altura);
  if (sexo === 'homem'){
    const calc = 72.7 * altura - 58;
    res.send(`O peso ideal é: ${calc}`)
  }else{
    const calc2 = 62.1 * altura - 44.7;
    res.send(`O peso ideal é: ${calc2}`)
  } 
})

app.listen(3000,() =>{
  console.log('Aplicação iniciada em http://localhost:3000')
})