// 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
  //  • O maior preço lido; e
    //• A média aritmética dos preços dos produtos.

    const express = require('express')
    const app = express()
    
  
    app.use(express.json())
    
        app.post("/exercicio7", (req, res) => {
            const corpo = req.body
            let listaProdutos = []
            
            corpo.forEach(produto => {
                listaProdutos.push(produto)
            });
        
            let soma = 0
            listaProdutos.forEach(produto => {
                soma = soma + produto.preco
            })
        
            const media = soma / listaProdutos.length
        
          
            let maiorPreco = 0
           
            listaProdutos.forEach(produto => {
                if (produto.preco > maiorPreco){
                    maiorPreco = produto.preco
                }
            })
        
            const resultado = {
                precoMedio: media.toFixed(2),
                maiorPreco: maiorPreco
            }
            res.json(resultado)
        })
        
        
        app.listen(3000, () => {
            console.log("Aplicação iniciada em http://localhost:3000")
        })