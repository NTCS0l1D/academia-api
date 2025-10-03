const express = require('express');
const router = express.Router();

let avaliacoes = [];
let nextId = 1;

// GET /avaliacoes
router.get('/', (req, res) => res.json(avaliacoes));

// GET /avaliacoes/:id
router.get('/:id', (req, res) => {
  const avaliacao = avaliacoes.find(a => a.id === Number(req.params.id));
  if (!avaliacao) return res.status(404).json({ error: 'Avaliação não encontrada' });
  res.json(avaliacao);
});

// POST /avaliacoes
router.post('/', (req, res) => {
  const { alunoId, peso, percentualGordura } = req.body;
  if (!alunoId || !peso || !percentualGordura) {
    return res.status(400).json({ error: 'Campos obrigatórios: alunoId, peso, percentualGordura' });
  }
  const novo = { id: nextId++, alunoId, peso, percentualGordura, data: new Date().toISOString() };
  avaliacoes.push(novo);
  res.status(201).json(novo);
});

// PUT /avaliacoes/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = avaliacoes.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ error: 'Avaliação não encontrada' });

  const { alunoId, peso, percentualGordura } = req.body;
  if (!alunoId || !peso || !percentualGordura) {
    return res.status(400).json({ error: 'Campos obrigatórios: alunoId, peso, percentualGordura' });
  }

  avaliacoes[index] = { id, alunoId, peso, percentualGordura, data: new Date().toISOString() };
  res.json(avaliacoes[index]);
});

// DELETE /avaliacoes/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = avaliacoes.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ error: 'Avaliação não encontrada' });

  const deletado = avaliacoes.splice(index, 1)[0];
  res.json({ message: 'Avaliação removida', deletado });
});

module.exports = router;
