// routes/exercicios.js
const express = require('express');
const router = express.Router();

let exercicios = [];
let nextId = 1;

// GET /exercicios
router.get('/', (req, res) => {
  res.json(exercicios);
});

// GET /exercicios/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = exercicios.find(e => e.id === id);
  if (!item) return res.status(404).json({ error: 'Exercício não encontrado' });
  res.json(item);
});

// POST /exercicios
router.post('/', (req, res) => {
  const { nome, grupoMuscular, dificuldade, equipamentoNecessario } = req.body;

  if (!nome || !grupoMuscular || !dificuldade) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, grupoMuscular, dificuldade' });
  }

  const novo = { 
    id: nextId++, 
    nome, 
    grupoMuscular, 
    dificuldade, 
    equipamentoNecessario: equipamentoNecessario || null 
  };

  exercicios.push(novo);
  res.status(201).json(novo);
});

// PUT /exercicios/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = exercicios.findIndex(e => e.id === id);

  if (index === -1) return res.status(404).json({ error: 'Exercício não encontrado' });

  const { nome, grupoMuscular, dificuldade, equipamentoNecessario } = req.body;

  if (!nome || !grupoMuscular || !dificuldade) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, grupoMuscular, dificuldade' });
  }

  exercicios[index] = { id, nome, grupoMuscular, dificuldade, equipamentoNecessario: equipamentoNecessario || null };
  res.json(exercicios[index]);
});

// DELETE /exercicios/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = exercicios.findIndex(e => e.id === id);

  if (index === -1) return res.status(404).json({ error: 'Exercício não encontrado' });

  const deletado = exercicios.splice(index, 1)[0];
  res.json({ message: 'Exercício removido', deletado });
});

module.exports = router;
