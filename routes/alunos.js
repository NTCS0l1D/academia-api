const express = require('express');
const router = express.Router();

let alunos = [];
let nextId = 1;

router.get('/', (req, res) => res.json(alunos));

router.get('/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
  res.json(aluno);
});

router.post('/', (req, res) => {
  const { nome, email, matricula } = req.body;
  if (!nome || !email || !matricula) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, email, matricula' });
  }
  const novo = { id: nextId++, nome, email, matricula };
  alunos.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ error: 'Aluno não encontrado' });

  const { nome, email, matricula } = req.body;
  if (!nome || !email || !matricula) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, email, matricula' });
  }

  alunos[index] = { id, nome, email, matricula };
  res.json(alunos[index]);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ error: 'Aluno não encontrado' });

  const deletado = alunos.splice(index, 1)[0];
  res.json({ message: 'Aluno removido', deletado });
});

module.exports = router;
