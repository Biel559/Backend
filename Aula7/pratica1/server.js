const express = require('express');
const app = express();
const port = 4000;

// 4. Middleware para permitir que o servidor lide com requisições no formato JSON 
app.use(express.json());

// 5. Criação da rota GET na raiz ('/') que responde com uma mensagem simples 
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// 6. Inicia o servidor e define que ele deve rodar na porta especificada (3000) 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});