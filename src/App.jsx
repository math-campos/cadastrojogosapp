import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './componentes/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Produtoras from './componentes/telas/produtoras/Produtoras';
import Jogos from './componentes/telas/jogos/Jogos'
import Login from './componentes/telas/login/Login'
import MenuPrivado from './componentes/MenuPrivado'
import MenuPublico from './componentes/MenuPublico'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPublico />}  >
          <Route index element={<Home />} />
          <Route exact="true" path="/login" element={<Login />} />
        </Route>

        <Route path="/privado" element={<MenuPrivado />}  >
          <Route index element={<Home />} />
          <Route exact="true" path="produtoras" element={<Produtoras />} />
          <Route exact="true" path="jogos" element={<Jogos />} />
          <Route exact="true" path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

