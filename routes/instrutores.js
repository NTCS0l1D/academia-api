const express = require('express');
const router = express.Router();

let instrutores = [];
let nextId = 1;

// GET /instrutores
router.get('/', (req, res) => res.json(instrutores));

// GET /instrutores/:id
router.get('/:id', (req, res) => {
  const instrutor = instrutores.find(i => i.id === Number(req.params.id));
  if (!instrutor) return res.status(404).json({ error: 'Instrutor não encontrado' });
  res.json(instrutor);
});

// POST /instrutores
router.post('/', (req, res) => {
  const { nome, especialidade, telefone } = req.body;
  if (!nome || !especialidade || !telefone) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, especialidade, telefone' });
  }
  const novo = { id: nextId++, nome, especialidade, telefone };
  instrutores.push(novo);
  res.status(201).json(novo);
});

// PUT /instrutores/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = instrutores.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Instrutor não encontrado' });

  const { nome, especialidade, telefone } = req.body;
  if (!nome || !especialidade || !telefone) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, especialidade, telefone' });
  }

  instrutores[index] = { id, nome, especialidade, telefone };
  res.json(instrutores[index]);
});

// DELETE /instrutores/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = instrutores.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Instrutor não encontrado' });

  const deletado = instrutores.splice(index, 1)[0];
  res.json({ message: 'Instrutor removido', deletado });
});

module.exports = router;
