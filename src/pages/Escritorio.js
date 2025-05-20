import React from 'react';

const Escritorio = () => (
  <div className="container">
    <div className="d-flex justify-content-center mb-1"><img src="https://i.imgur.com/dO5Vifh.png" className="titulo-escritorio" alt="" /></div>
    <hr />
    <div className="texto-escritorio">Formados pela Universidade Federal de Alagoas em Arquitetura e Urbanismo, os arquitetos Daniel Lemos e Waleska Agra Lemos atuam, desde 1994, nas mais diversas áreas, com destaque para obras do mercado residencial, hoteleiro, comercial e corporativo. Os profissionais ressaltam o diferencial do seu trabalho: "Entender as dificuldades do cliente, traduzi-las e surpreendê-los"<br /><br /></div>
    <div className="d-flex justify-content-center">
      <img src="https://i.imgur.com/rgt72j3.jpg" className="img-escritorio" alt="" />
    </div>
    <br />
    <hr />
    <footer className="p-5 d-flex justify-content-center">
      <big><a href="https://instagram.com/agralemosarquitetos" className="text-dark p-2"><i className="uil uil-instagram"></i></a></big>
      <big><a href="https://facebook.com/agralemos" className="text-dark p-2"><i className="uil uil-facebook-f"></i></a></big>
    </footer>
  </div>
);

export default Escritorio; 