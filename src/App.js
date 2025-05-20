import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import ProjetoShow from './pages/ProjetoShow';
import Escritorio from './pages/Escritorio';
import Contato from './pages/Contato';
import './App.css';
import './data/styled.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjetoShow />} />
          <Route path="/escritorio" element={<Escritorio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
