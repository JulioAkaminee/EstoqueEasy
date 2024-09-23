import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../src/routers/router.jsx'
function App() {
  return (
   <BrowserRouter>
   <Router/>
   </BrowserRouter>
  );
}

export default App;
