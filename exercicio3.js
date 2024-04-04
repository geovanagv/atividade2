//3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele 
//efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
//Escrever o nome do vendedor e seu salário total.

const express = require('express');
const app = express ();

app.use(express.json());

app.get('/venda/:name/:money/:sales/:porcentage', (req,res) =>{
    const nome = (req.params.name)
    const salario = Number(req.params.money)
    const vendas_totais = Number(req.params.sales)
    const percentual = Number(req.params.porcentage)
    const calc = (percentual/100) * vendas_totais

    const calc2 = salario + calc

    res.send('Olá '+nome+' o seu salário desse mês é: '+calc2)
})

app.listen(3000,() =>{
    console.log('Aplicação iniciada em http://localhost:3000')
})