# 📌 Academia API

API REST desenvolvida em **Node.js + Express** para gerenciar **alunos, instrutores, exercícios, treinos e avaliações**.  
Este projeto foi criado para fins acadêmicos, com armazenamento em memória (sem banco de dados).  

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/SEU_USUARIO/academia-api.git
cd academia-api
2. Instale as dependências
bash
Copiar código
npm install
3. Execute a API
bash
Copiar código
npm run dev
A API estará rodando em:
👉 http://localhost:3000

📦 Collection do Postman
Todos os endpoints já estão configurados na collection:
/postman/academia-api.postman_collection.json

Basta importar no Postman para testar rapidamente.

📌 Endpoints
🔹 Alunos
GET /alunos → Lista todos os alunos

GET /alunos/:id → Retorna aluno pelo ID

POST /alunos

json
Copiar código
{ "nome": "João Silva", "email": "joao.silva@mail.com", "matricula": "2025A001" }
PUT /alunos/:id

json
Copiar código
{ "nome": "João Silva Junior", "email": "joaojr@mail.com", "matricula": "2025A001" }
DELETE /alunos/:id

🔹 Instrutores
GET /instrutores → Lista todos os instrutores

GET /instrutores/:id → Retorna instrutor pelo ID

POST /instrutores

json
Copiar código
{ "nome": "Carlos Andrade", "especialidade": "Musculação", "telefone": "11999999999" }
PUT /instrutores/:id

json
Copiar código
{ "nome": "Carlos Andrade", "especialidade": "Funcional", "telefone": "11888888888" }
DELETE /instrutores/:id

🔹 Exercícios
GET /exercicios → Lista todos os exercícios

GET /exercicios/:id → Retorna exercício pelo ID

POST /exercicios

json
Copiar código
{ "nome": "Agachamento Livre", "grupoMuscular": "Pernas", "dificuldade": "Intermediário", "equipamentoNecessario": "Barra" }
PUT /exercicios/:id

json
Copiar código
{ "nome": "Agachamento Hack", "grupoMuscular": "Pernas", "dificuldade": "Avançado", "equipamentoNecessario": "Máquina Hack" }
DELETE /exercicios/:id

🔹 Treinos
GET /treinos → Lista todos os treinos

GET /treinos/:id → Retorna treino pelo ID

POST /treinos

json
Copiar código
{ "titulo": "Treino A", "descricao": "Peito e Tríceps", "duracaoMin": 60 }
PUT /treinos/:id

json
Copiar código
{ "titulo": "Treino B", "descricao": "Costas e Bíceps", "duracaoMin": 70 }
DELETE /treinos/:id

🔹 Avaliações
GET /avaliacoes → Lista todas as avaliações

GET /avaliacoes/:id → Retorna avaliação pelo ID

POST /avaliacoes

json
Copiar código
{ "alunoId": 1, "peso": 80, "percentualGordura": 15 }
PUT /avaliacoes/:id

json
Copiar código
{ "alunoId": 1, "peso": 78, "percentualGordura": 14 }
DELETE /avaliacoes/:id

⚙️ Tecnologias utilizadas
Node.js

Express

👨‍💻 Autor
Nome: SEU_NOME

Matrícula: SEU_RA

Contribuições: Desenvolvimento completo dos 5 CRUDs, criação da collection no Postman e documentação no README.