import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../login/login.css';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, senha);
  };

  return (
    <div className="container-form-autenticacao">
      <form className="form-autenticacao" onSubmit={handleSubmit}>
        <h2>Faça Seu Login</h2>
        <div className="grupo-formulario">
          <label htmlFor="email">E-mail</label><br />
          <input
            type="email"
            className="input-login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Digite seu Email'
          />







        </div>
        <div className="grupo-formulario">
          <label htmlFor="senha">Senha</label><br />
          <input
            type="password"
            className="input-login"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder='Digite Sua Senha'
          />
        </div>
        <button type="submit" className="botao-autenticacao">Entrar</button>
        <div className="links-autenticacao">
          {/* <Link to="/recuperar-senha">Esqueceu a senha?</Link>
          <Link to="/cadastro">Criar uma conta</Link> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
