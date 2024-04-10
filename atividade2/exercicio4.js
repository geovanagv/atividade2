/* Questão 04
 Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). 
 O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do
<nome do piloto> foi <velocidade media calculada> km/h. */


const express = require("express");
const app = express();


app.use(express.json());


app.get("/exercicio1/:nome_piloto/:distancia/:tempo", (req, res) => {
  const nome = req.params.nome_piloto;
  const km = Number(req.params.distancia);
  const tempodemorado = Number(req.params.tempo);

  const velocidade_media = km / tempodemorado;

  res.send(`A velocida média do piloto ${nome} é:  ${velocidade_media} km/h`);
});

app.listen(3000, () => {
  console.log("Aplicação iniciada em http://localhost:3000");
});