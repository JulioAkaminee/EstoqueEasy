
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Recuperarsenha from '../pages/recuperarsenha';
import Cadastro from '../pages/cadastro';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recuperar-senha" element={<Recuperarsenha />} />
      <Route path="/cadastro" element={<Cadastro />} />
     
      
    </Routes>
  );
}

export default AppRoutes;
