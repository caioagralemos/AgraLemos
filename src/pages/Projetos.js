import React from 'react';
import { Link } from 'react-router-dom';
import projetos from '../data/projetos';

const Projetos = () => (
  <div className="container">
    <div className="row mt-3">
      {projetos.map((projeto, idx) => (
        <div className="col-md-3 col-12 mb-4" key={projeto.id}>
          <div className="projetos-card">
            <img src={projeto.imagens[0]} className="projetos-img img-fluid" alt={projeto.nome} />
            <Link to={`/projetos/${projeto.id}`}><div className="projetos-title"><h5>{projeto.nome}</h5></div></Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projetos; 