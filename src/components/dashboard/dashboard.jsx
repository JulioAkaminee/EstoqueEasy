import React from 'react';
import '../dashboard/dashboard.css';


const Dashboard = () => {
  return (
    <div className="painel">
      <header className="cabecalho-painel">
        <h1>Dashboard</h1>
        <button className="botao-sair"><img src="/assets/icons/logout.svg" alt="" /><p>Sair</p></button>
      </header>
      <main className="conteudo-painel">
        <div className="cartoes-painel">
          <div className="cartao-painel">
            <img src="/assets/icons/caixa.svg" alt="Total de Itens" className="imagem-cartao" />
            <h2>Total de Itens</h2>
            <p className="valor-cartao">1.234</p>
          </div>
          <div className="cartao-painel">
            <img src="/assets/icons/inventario.svg" alt="Itens com Baixo Estoque" className="imagem-cartao" />
            <h2>Itens com Baixo Estoque</h2>
            <p className="valor-cartao">23</p>
          </div>
    
          <div className="cartao-painel">
            <img src="/assets/icons/analise.svg" alt="Valor Total do Estoque" className="imagem-cartao" />
            <h2>Valor Total do Estoque</h2>
            <p className="valor-cartao">R$ 543.210</p>
          </div>
        </div>
        <div className="acoes-painel">
          <button className="botao-acao"><img src="/assets/icons/adicionar.svg" alt="" />Adicionar Novo Item</button>
          <button className="botao-acao">Gerar Relatório</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
