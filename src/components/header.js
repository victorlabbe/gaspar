// src/components/Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="contact-info">
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Almte. Simpson 152, Valparaíso.
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} /> Teléfono: +56 9 1245 6789
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} /> Email: contacto@escuelagasparcabrales.cl
        </span>
      </div>
    </header>
  );
};

export default Header;
