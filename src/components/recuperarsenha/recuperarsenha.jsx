import React from 'react';
import { Link } from 'react-router-dom';
import '../recuperarsenha/recuperarsenha.css';
const RecuperarSenha = () => {
  return (
    <div className="container-formulario-recuperacao">
      <form className="formulario-recuperacao">
        <h2>Recuperar Senha</h2>
        <div className="grupo-formulario">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Digite seu e-mail"
          />
        </div>
        <button type="submit" className="botao-recuperacao">Enviar Link de Recuperação</button>
        <div className="links-recuperacao">
          <Link to="/">Voltar para o Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RecuperarSenha;
