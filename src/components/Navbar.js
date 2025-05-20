import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../data/styled.css';

const Navbar = () => (
  <header className="header mb-5">
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://i.imgur.com/dO5Vifh.png" className="img-navbar" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="span-navbar me-auto">+</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/projetos" className="nav-link">Projetos</Link>
            <Link to="/escritorio" className="nav-link">Escritório</Link>
            <Link to="/contato" className="nav-link">Contato</Link>
          </div>
          <div className="navbar-nav ms-2">
            <a href="https://instagram.com/agralemosarquitetos" className="nav-link"><i className="uil uil-instagram"></i></a>
            <a href="https://facebook.com/agralemos" className="nav-link"><i className="uil uil-facebook-f"></i></a>
          </div>
        </div>
      </div>
    </nav>
    <br />
  </header>
);

export default Navbar; 