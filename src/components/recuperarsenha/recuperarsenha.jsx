import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../recuperarsenha/recuperarsenha.css';

const RecuperarSenha = ({ aoEnviar }) => {
  const [email, setEmail] = useState('');

  const lidarComEnvio = (e) => {
    e.preventDefault();
    aoEnviar(email);
  };

  return (
    <div className="container-formulario-autenticacao">
      <form className="formulario-autenticacao" onSubmit={lidarComEnvio}>
        <h2>Recuperar Senha</h2>
        <div className="grupo-formulario">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="botao-autenticacao">Enviar Link de Recuperação</button>
        <div className="links-autenticacao">
          {/* <Link to="/login">Voltar para o Login</Link> */}
        </div>
      </form>
    </div>
  );
};

export default RecuperarSenha;
