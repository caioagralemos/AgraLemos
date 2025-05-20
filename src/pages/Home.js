import React from 'react';
import projetos from '../data/projetos';

const Home = () => {
  const max = projetos.length - 2;
  const n = Math.floor(Math.random() * (max > 0 ? max : 1));
  return (
    <div className="container-fluid p-0">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner mt-0">
          <div className="carousel-item active">
            <img src={projetos[n]?.imagens[1]} id="img-carousel" className="d-flex h-100 w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={projetos[n+1]?.imagens[1]} id="img-carousel" className="d-flex h-100 w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={projetos[n+2]?.imagens[1]} id="img-carousel" className="d-flex h-100 w-100" alt="..." />
          </div>
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

export default Home; 