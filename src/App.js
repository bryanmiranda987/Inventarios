import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventarioP from './Componentes/InventarioPage';
import EnviosP from './Componentes/EnviosPage';
import SolicitudesP from './Componentes/SolicitudesPage';
import HomeP from './Componentes/HomePage';
import Navbar from './Componentes/Navbar';
import './App.css';

function App() {
  return (
      <Router>
        <div className="container-fluid">
          {/* Agrega la barra de navegación */}
          <Navbar />
          {/* Utiliza un Switch para definir las rutas y los componentes asociados */}
          <Routes>
            <Route path="/inventario" element={<InventarioP/>} />
            <Route path="/enviosPage" element={<EnviosP/>} />
            <Route path="/solicitudes" element={<SolicitudesP/>}/>
            <Route path="/" element={<HomeP/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
