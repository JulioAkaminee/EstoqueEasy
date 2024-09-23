import React from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';

const Login = () => {
  return (
    <div className="container-form-autenticacao">
      <form className="form-autenticacao" method='POST' action='/api/submit-form'>
        <h2>Faça Seu Login</h2>
        <div className="grupo-formulario">
          <label htmlFor="email">E-mail</label>
          <input type="email" className="input-login" required placeholder='Digite seu Email'/>
        </div>

        <div className="grupo-formulario">
          <label htmlFor="senha">Senha</label>
          <input type="password" className="input-login" required placeholder='Digite Sua Senha'/>
        </div>

        <button type="submit" className="botao-autenticacao">Entrar</button>

        <div className="links-autenticacao">
          <Link to="/recuperar-senha">Esqueceu a senha?</Link>
          <p>Não tem uma conta?  <Link to="/cadastro">Criar uma conta</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
