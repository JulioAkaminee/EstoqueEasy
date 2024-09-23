import React, { useState } from 'react';
import '../cadastro/cadastro.css';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar erros
  const [success, setSuccess] = useState(''); // Estado para armazenar mensagens de sucesso

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Verifica se as senhas correspondem
    if (senha !== confirmarSenha) {
      setError("As senhas não correspondem!");
      setSuccess('');
      return;
    }

    const formData = { nome, email, senha };

    fetch('http://localhost:5000/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Erro ao cadastrar'); // Captura a mensagem de erro
        });
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setSuccess(data.message || 'Cadastro realizado com sucesso!');
      setError(''); // Limpa qualquer erro anterior
    })
    .catch(error => {
      console.error('Erro:', error);
      setError(error.message || 'Erro ao enviar dados');
      setSuccess('');
    });
  };

  return (
    <div className="container-formulario-autenticacao">
      <form className="formulario-autenticacao" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        
        
        <div className="grupo-formulario">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Digite seu nome completo"
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
            placeholder="Confirme sua senha"
          />
        </div>
        <button type="submit" className="botao-autenticacao">Cadastrar</button>
        <div className="links-autenticacao">
          <p>Já tem conta? <Link to="/">Faça seu Login</Link></p>
          {success && <div className="success-message">{success}</div>} {/* Exibe a mensagem de sucesso */}
          {error && <div className="error-message">{error}</div>} {/* Exibe a mensagem de erro */}
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
