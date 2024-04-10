//8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
//Código do Cargo -> Percentual:
    //• 101 -> 5%
    //• 102 -> 7,5%
    //• 103 -> 10% em java script 
    const express = require('express');
    const bodyParser = require('body-parser');
    
    const app = express();
    app.use(bodyParser.json());
    
    const aumentoPorCargo = {
        '101': 0.05,
        '102': 0.075,
        '103': 0.10
    };
    
    app.post('/calcular-salario', (req, res) => {
        console.log(req.body); 
        const { salario, codigoCargo } = req.body;
    
        let aumento = aumentoPorCargo[codigoCargo];
        if (aumento === undefined) {
            aumento = 0.15;
        }
    
        const novoSalario = salario * (1 + aumento);
        const diferenca = novoSalario - salario;
    
        res.json({
            salarioAntigo: salario,
            novoSalario: novoSalario,
            diferenca: diferenca
        });
    });
    
    
    app.listen(3000, () => {
        console.log(`Servidor rodando na porta http://localhost:3000}`);
    });