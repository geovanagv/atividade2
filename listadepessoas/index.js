const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3002;

app.use(express.json());

let pessoas = [];

const generateId = () => {
  return uuidv4();
};

app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});
app.get('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  const pessoa = pessoas.find(p => p.id === id);

  if (!pessoa) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }

  res.json(pessoa);
});

app.post('/pessoas', (req, res) => {
  const pessoa = { ...req.body, id: generateId() };
  pessoas.push(pessoa);
  res.status(201).json(pessoa);
});

app.put('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  const index = pessoas.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }

  pessoas[index] = { ...req.body, id };
  res.json(pessoas[index]);
});

app.delete('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  pessoas = pessoas.filter(p => p.id !== id);
  res.sendStatus(204);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});