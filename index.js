const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

const bosses = [
  { id: 1, nome: "Falso Cavaleiro" },
  { id: 2, nome: "Hornet (Protetora)" },
  { id: 3, nome: "Hornet (Sentinela)" },
  { id: 4, nome: "Lordes Louva-a-Deus" },
  { id: 5, nome: "Mestre das Almas" },
  { id: 6, nome: "Receptáculo Quebrada" },
  { id: 7, nome: "Defensor do Esterco" },
  { id: 8, nome: "Cavaleiros Sentinela" },
  { id: 9, nome: "Grimm" },
  { id: 10, nome: "A Radiância" }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo a API de Hollow Knight! Use /bosses para listar os chefes.');
});

app.get('/bosses', (req, res) => {
  const id = parseInt(req.query.id);
  if (id) {
    const boss = bosses.find(b => b.id === id);
    if (boss) return res.json(boss);
    return res.status(404).json({ erro: "Boss não encontrado" });
  }
  res.json(bosses);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
