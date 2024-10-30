// src/components/Navbar.js
import React, { useState } from 'react';
import '../components/main.css'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const [isCommunityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!isCommunityDropdownOpen);
    setServicesDropdownOpen(false); // Cierra el dropdown de servicios si está abierto
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
    setCommunityDropdownOpen(false); // Cierra el dropdown de comunidad si está abierto
  };

  return (
    <nav className="main">
      <ul className="main-list">
        <li>
          <a href="#comunidad" onClick={toggleCommunityDropdown}>
            Comunidad
          </a>
          {isCommunityDropdownOpen && (
            <ul className="dropdown">
              <li><a href="#comunidad1">Comunidad 1</a></li>
              <li><a href="#comunidad2">Comunidad 2</a></li>
              <li><a href="#comunidad3">Comunidad 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#servicios" onClick={toggleServicesDropdown}>
            Servicios
          </a>
          {isServicesDropdownOpen && (
            <ul className="dropdown">
              <li><a href="#servicio1">Servicio 1</a></li>
              <li><a href="#servicio2">Servicio 2</a></li>
              <li><a href="#servicio3">Servicio 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#acerca">Acerca de</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
