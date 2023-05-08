
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/navbars/Header"
import ControlledCarousel from "./components/ControlledCarousel"
import Categorias from "./components/Categorias"
import NavBar from "./components/navbars/NavBar"



function App() {
  return (
    <div>
      <Header />
        <NavBar />
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

export default App;

