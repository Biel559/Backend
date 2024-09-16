// 1. Importa o Express
const express = require('express');

// 2. Cria uma instância do Express
const app = express();

// 3. Define a porta onde a API irá rodar
const port = 3000;

// 4. Middleware para permitir que o servidor lide com requisições no formato JSON 
app.use(express.json());

// 5. Criação da rota GET na raiz ('/') que responde com uma mensagem simples 
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// 6. Inicia o servidor e define que ele deve rodar na porta especificada (3000) 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post('/data', (req, res) => { 
    const {name, age} = req.body;
    res.send(`Nome: ${name}, Idade: ${age}`);
});

