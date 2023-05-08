
import React from 'react';
import './App.css';
import Footer from './components/Footer';

import Main from './components/Main';
import ControlledCarousel from "./components/ControlledCarousel"
import Categorias from "./components/Categorias"
import NavBar from "./components/navbars/NavBar"



function Detalle() {
  return (
    <div>

      <NavBar/>
        <Main />
          <div className='carousel'>
            <ControlledCarousel />
          </div>
          <div className='listaCategorias'>
            <Categorias />
          </div>
      <Footer />
    </div>
  );
}

export default Detalle;

