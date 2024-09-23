const express = require('express');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();
const PORT = process.env.PORT || 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', // substitua pela sua senha do MySQL
    database: 'gerenciador_estoque' 
});


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));


app.post('/api/submit-form', (req, res) => {
    const { nome, email, senha } = req.body;

    // Verifica se os dados estão preenchidos
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    // Verifica se o email já está em uso
    const emailCheckQuery = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(emailCheckQuery, [email], (error, results) => {
        if (error) {
            console.error('Erro ao verificar email:', error);
            return res.status(500).json({ message: 'Erro ao verificar email.' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'Email já em uso.' });
        }

        const nivelAcesso = 'usuario'; // Nível de acesso fixo
        const dataCriacao = new Date(); // Data atual

        // Insere os dados no banco de dados
        const query = 'INSERT INTO usuarios (nome, email, senha, nivel_acesso, data_criacao) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [nome, email, senha, nivelAcesso, dataCriacao], (error, results) => {
            if (error) {
                console.error('Erro ao cadastrar:', error);
                return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
            }
            res.json({ message: 'Usuário cadastrado com sucesso!', data: { nome, email } });
        });
    });
});





app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
