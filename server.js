// server.js
const express = require('express');
const app = express();

app.use(express.json()); // permite ler JSON no body das requisições

// importar rotas
const alunosRouter = require('./routes/alunos');
const instrutoresRouter = require('./routes/instrutores');
const exerciciosRouter = require('./routes/exercicios');
const treinosRouter = require('./routes/treinos');
const avaliacoesRouter = require('./routes/avaliacoes');

// usar rotas
app.use('/alunos', alunosRouter);
app.use('/instrutores', instrutoresRouter);
app.use('/exercicios', exerciciosRouter);
app.use('/treinos', treinosRouter);
app.use('/avaliacoes', avaliacoesRouter);

// rota raiz
app.get('/', (req, res) => {
  res.send('API Academia rodando 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
