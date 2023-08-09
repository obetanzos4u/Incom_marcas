// import MCorning from '../src/img/3MCorning_marca.png'
// import Bosch from '../src/img/Bosch_marca.png'
// import Brady from '../src/img/Brady_marca.png'
// import CalAm from '../src/img/CalAm_marca.png'
// import Charofil from '../src/img/Charofil_marca.png'
// import Condumex from '../src/img/Condumex_marca.png'
// import Cuprum from '../src/img/Cuprum_marca.png'
// import EJGrup from '../src/img/EJGrup_marca.png'
// import Fremco from '../src/img/Fremco_marca.png'
// import GMP_marca from '../src/img/GMP_marca.png'
// import GoldenEagle from '../src/img/GoldenEagle_marca.png'
import IcoPlastik from '../src/img/IcoPlastik_marca.png';
import Icoptiks from '../src/img/Icoptiks_marca.png';
// import Inno_marca from '../src/img/Inno_marca.png'
// import Intellinet from '../src/img/Intellinet_marca.png'
// import Jaguar from '../src/img/Jaguar_marca.png'
// import Jonard from '../src/img/Jonard_marca.png'
// import Leviton from '../src/img/Leviton_marca.png'
// import Manhattan from '../src/img/Manhattan_marca.png'
import Metalico from '../src/img/Metalico_marca.png';
// import Panduit from '../src/img/Panduit_marca.png'
// import PLP from '../src/img/PLP_marca.png'
import Polymerico from '../src/img/Polymerico_marca.png';
// import Radiodetection from '../src/img/Radiodetection_marca.png'
// import Ripley from '../src/img/Ripley_marca.png'
// import Surtek from '../src/img/Surtek_marca.png'
// import Trupper from '../src/img/Trupper_marca.png'
import Tuliko from '../src/img/Tuliko_marca.png';
// import Urrea from '../src/img/Urrea_marca.jpg'
// import Yokogawa from '../src/img/Yokogawa_marca.png'

import InfoMarcasComponent from './Rolling';

function Marcas_propias() {
  return (
    <div>
      <InfoMarcasComponent />
      <div className="image-wrapper-container-info_marcas">
        <h1 className="title-info-marcas">
          Descubre la gama de productos que las marcas de INCOM tienen para tus
          proyectos
        </h1>
        <div className="container-info_marcas">
          <div className="efect-tl-info_marcas"></div>
          <div className="element-info_marcas">
            <img src={Polymerico} alt="Polymerico" className="img-list_marca" />
          </div>
          <div className="element3-info_marcas">
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
        <div className="container-info_marcas">
          <div className="efect-tl-info_marcas"></div>
          <div className="element-info_marcas">
            <img
              src={IcoPlastik}
              alt="IcoPlastik"
              className="img-list_marca"
              target="_blank"
            />
          </div>
          <div className="element3-info_marcas">
            <ul>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoplastik_ducto"
                  target="_blank">
                  Ductos
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoplastik_micro"
                  target="_blank">
                  Microductos
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoplastik_cople"
                  target="_blank">
                  Coples y tapones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-info_marcas">
          <div className="efect-tl-info_marcas"></div>
          <div className="element-info_marcas">
            <img
              src={Metalico}
              alt="Metalico"
              className="img-list_marca"
              target="_blank"
            />
          </div>
          <div className="element3-info_marcas">
            <ul>
              <li>
                <a
                  href="/productos/buscar?busqueda=metalico_adss"
                  target="_blank">
                  Herrajes para ADSS
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=metalico_tension"
                  target="_blank">
                  Herrajes tensión
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=metalico_suspension"
                  target="_blank">
                  Herrajes suspensión
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=metalico_accesorios"
                  target="_blank">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-info_marcas">
          <div className="efect-tl-info_marcas"></div>
          <div className="element-info_marcas">
            <img src={Tuliko} alt="Tuliko" className="img-list_marca" />
          </div>
          <div className="element3-info_marcas">
            <ul>
              <li>
                <a
                  href="/productos/buscar?busqueda=tuliko_fleje"
                  target="_blank">
                  Flejes y hebillas
                </a>
              </li>
              <li>
                <a href="/productos/buscar?busqueda=tuliko_ext" target="_blank">
                  Planta externa
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=tuliko_herramienta"
                  target="_blank">
                  Herramientas
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=tuliko_cinchos_acc"
                  target="_blank">
                  Cinchos y accesorios
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=tuliko_miscelaneos"
                  target="_blank">
                  Misceláneos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mobile-container-info_marcas"
          className="container-info_marcas">
          <div className="efect-tl-info_marcas"></div>
          <div className="element-info_marcas">
            <img src={Icoptiks} alt="Icoptiks" className="img-list_marca" />
          </div>
          <div className="element3-info_marcas">
            <ul>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_cable_fo"
                  target="_blank">
                  Cable de fibra óptica
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_herramienta"
                  target="_blank">
                  Herramientas y accesorios
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_equipos"
                  target="_blank">
                  Equipos empalme y medición
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_splitters"
                  target="_blank">
                  Splitters
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_conectores"
                  target="_blank">
                  Conectores y acompladores
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_atenuadores"
                  target="_blank">
                  Atenuadores
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_jumper"
                  target="_blank">
                  Jumper de fibra óptica
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_odf"
                  target="_blank">
                  Distribuidores ópticos
                </a>
              </li>
              <li>
                <a
                  href="/productos/buscar?busqueda=icoptiks_iden"
                  target="_blank">
                  Identificación
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marcas_propias;
