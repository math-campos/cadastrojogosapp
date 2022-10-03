import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import React from 'react';
import Produtoras from './componentes/telas/produtoras/Produtoras';
import Jogos from './componentes/telas/jogos/Jogos'

function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/produtoras" element={<Produtoras/>}/>
          <Route exact path="/jogos" element={<Jogos/>}/>
        </Routes>
    </Router>
  );
}

export default App;

