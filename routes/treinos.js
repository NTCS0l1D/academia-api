const express = require('express');
const router = express.Router();

let treinos = [];
let nextId = 1;

// GET /treinos
router.get('/', (req, res) => res.json(treinos));

// GET /treinos/:id
router.get('/:id', (req, res) => {
  const treino = treinos.find(t => t.id === Number(req.params.id));
  if (!treino) return res.status(404).json({ error: 'Treino não encontrado' });
  res.json(treino);
});

// POST /treinos
router.post('/', (req, res) => {
  const { titulo, descricao, duracaoMin } = req.body;
  if (!titulo || !descricao || !duracaoMin) {
    return res.status(400).json({ error: 'Campos obrigatórios: titulo, descricao, duracaoMin' });
  }
  const novo = { id: nextId++, titulo, descricao, duracaoMin };
  treinos.push(novo);
  res.status(201).json(novo);
});

// PUT /treinos/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = treinos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Treino não encontrado' });

  const { titulo, descricao, duracaoMin } = req.body;
  if (!titulo || !descricao || !duracaoMin) {
    return res.status(400).json({ error: 'Campos obrigatórios: titulo, descricao, duracaoMin' });
  }

  treinos[index] = { id, titulo, descricao, duracaoMin };
  res.json(treinos[index]);
});

// DELETE /treinos/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = treinos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Treino não encontrado' });

  const deletado = treinos.splice(index, 1)[0];
  res.json({ message: 'Treino removido', deletado });
});

module.exports = router;
