import React from 'react';
import { useParams } from 'react-router-dom';
import projetos from '../data/projetos';

const ProjetoShow = () => {
  const { id } = useParams();
  const projeto = projetos.find(p => p.id === id);
  if (!projeto) return <div>Projeto não encontrado</div>;
  return (
    <div className="container-fluid p-0">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {projeto.imagens.map((img, idx) => (
            <button key={idx} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''} aria-current={idx === 0 ? 'true' : undefined} aria-label={`Slide ${idx+1}`}></button>
          ))}
        </div>
        <div className="carousel-inner mt-0" style={{height: '100vh'}}>
          {projeto.imagens.map((img, idx) => (
            <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={idx}>
              <img src={img} id="img-carousel" className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProjetoShow; 