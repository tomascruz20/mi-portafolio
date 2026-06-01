import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-dark bg-secondary' : 'navbar-light bg-white'} shadow-sm`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Mi Portafolio</Link>
        <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
          {/* Enlaces de navegación SPA obligatorios */}
          <Link className="nav-link mx-2" to="/">Inicio</Link>
          <Link className="nav-link mx-2" to="/about">Sobre mí</Link>
          <Link className="nav-link mx-2" to="/projects">Proyectos</Link>
          <Link className="nav-link mx-2" to="/contact">Contacto</Link>
          
         
          <button className="btn btn-sm ms-3 btn-outline-info" onClick={toggleTema}>
            {tema === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired,
};

export default Navbar;