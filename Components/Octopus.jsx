import React, { useState } from 'react';
import IcoPlastik from '../src/img/IcoPlastik_marca.png';

import '../src/App.css';

const Octopus = () => {
  const [isDiv2Hovered, setIsDiv2Hovered] = useState(false);

  const handleDiv2MouseOver = () => {
    setIsDiv2Hovered(true);
  };

  const handleDiv2MouseOut = () => {
    setIsDiv2Hovered(false);
  };

  const handleDiv1MouseOver = () => {
    setIsDiv2Hovered(true);
  };

  const handleDiv4MouseOver = () => {
    setIsDiv2Hovered(true);
  };

  return (
    <div>
      <div
        className={`div1 ${isDiv2Hovered ? 'scaled' : ''}`}
        onMouseOver={handleDiv1MouseOver} // Mantener el efecto de hover en div2 cuando se pasa el cursor sobre div1
        onMouseOut={handleDiv2MouseOut} // Mantener el efecto de hover en div2 cuando se sale del cursor de div1
      ></div>
      <div className="main-container">
        <div
          className={`div2 ${isDiv2Hovered ? 'scaled' : ''}`}
          onMouseOver={handleDiv2MouseOver}
          onMouseOut={handleDiv2MouseOut}>
          <img
            src={IcoPlastik}
            alt="IcoPlastik"
            className="img"
            target="_blank"
          />
        </div>
        <div className="div3">Descripción</div>
        <div
          className="div4"
          onMouseOver={handleDiv4MouseOver} // Mantener el efecto de hover en div2 cuando se pasa el cursor sobre div4
          onMouseOut={handleDiv2MouseOut} // Mantener el efecto de hover en div2 cuando se sale del cursor de div4
        >
          <ul>
            <li>
              <a
                href="/productos/buscar?busqueda=top_polimerico"
                target="_blank">
                Registros prefabricados
              </a>
            </li>
            <li>
              <a
                href="/productos/buscar?busqueda=polymerico_acc"
                target="_blank">
                Accesorios para registros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Octopus;
