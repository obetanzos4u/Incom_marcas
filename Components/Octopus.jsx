import { useState } from 'react';
import IcoPlastik from '../src/img/ICOPLASTIK.jpg';
import '../src/App.css';

const Octopus = () => {
  const [isDiv2Hovered, setIsDiv2Hovered] = useState(false);

  const handleDiv2MouseOver = () => {
    setIsDiv2Hovered(true);
  };

  const handleDiv2MouseOut = () => {
    setIsDiv2Hovered(false);
  };

  const handleDiv4MouseOver = () => {
    setIsDiv2Hovered(true);
  };

  return (
    <div>
      <div
        className={`div1 ${isDiv2Hovered ? 'scaled' : ''}`}
        onMouseOver={handleDiv2MouseOver}
        onMouseOut={handleDiv2MouseOut}></div>
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
        <div className={`div3 ${isDiv2Hovered ? 'transformed' : ''}`}>
          Coples y tapones para ductos
        </div>
        <div
          className={`div4 ${isDiv2Hovered ? 'transformed' : ''}`}
          onMouseOver={handleDiv4MouseOver}
          onMouseOut={handleDiv2MouseOut}>
          <ul>
            <li>
              <a
                href="/productos/buscar?busqueda=top_polimerico"
                target="_blank">
                Ductos
              </a>
            </li>
            <li>
              <a
                href="/productos/buscar?busqueda=polymerico_acc"
                target="_blank">
                Microductos
              </a>
            </li>
            <li>
              <a
                href="/productos/buscar?busqueda=polymerico_acc"
                target="_blank">
                Coples y tapones
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mheight"></div>
    </div>
  );
};

export default Octopus;
