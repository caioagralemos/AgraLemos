import React from 'react';

const Contato = () => (
  <main className="container contato-container">
    <div className="row">
      <div className="col-md-6 order-md-2">
        <div className="d-flex align-items-center justify-content-center">
          <img src="https://i.imgur.com/rgt72j3.jpg" alt="" className="img-contato mt-5" />
        </div>
      </div>
      <div className="col-md-6 order-md-1  d-flex justify-content-center">
        <article className="mt-5">
          <div className="endereco mt-5">
            <h5>Endereço</h5>
            Av. Comendador Leão 734, Poço<br />
            Maceió, AL<br />
            <a href="https://www.google.com/maps/place/Agra+Lemos+Arquitetos/@-9.6641231,-35.7242454,15z/data=!4m2!3m1!1s0x0:0xa5ef431a7d12d094?sa=X&ved=2ahUKEwjXirrHxOb9AhVSOrkGHUkFBxcQ_BJ6BAhUEAc">Ver no Mapa</a>
          </div>
          <div className="telefone mt-5">
            <h5>Telefone</h5>
            +55 (82) 99981-3924<br />
            +55 (82) 99983-1527<br />
            <a href="https://whatsa.me/+5582999831527">Whatsapp</a><br />
            <a href="tel:+55(82)99981-3924">Ligar</a>
          </div>
          <div className="email mt-5">
            <h5>Email</h5>
            agralemosarquitetos@hotmail.com<br />
            <a href="mailto:agralemosarquitetos@hotmail.com">Enviar</a><br />
          </div>
          <div className="social mt-5">
            <big><a href="https://instagram.com/agralemosarquitetos" className="text-dark"><i className="uil uil-instagram"></i></a></big>
            <big><a href="https://facebook.com/agralemos" className="text-dark"><i className="uil uil-facebook-f"></i></a></big>
          </div>
        </article>
      </div>
    </div>
    <br />
    <hr />
    <footer className="p-5 d-flex justify-content-center">
      <big><a href="https://instagram.com/agralemosarquitetos" className="text-dark p-2"><i className="uil uil-instagram"></i></a></big>
      <big><a href="https://facebook.com/agralemos" className="text-dark p-2"><i className="uil uil-facebook-f"></i></a></big>
    </footer>
  </main>
);

export default Contato; 