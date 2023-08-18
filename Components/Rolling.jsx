// import { useEffect } from 'react';
// import '../src/App.css';

// const InfoMarcasComponent = () => {
//   useEffect(() => {
//     const element3InfoMarcasList = document.querySelectorAll(
//       '.element3-info_marcas'
//     );
//     const elementInfoMarcasList = document.querySelectorAll(
//       '.element-info_marcas'
//     );

//     const handleMouseOver = (index) => {
//       element3InfoMarcasList[index].style.transform = 'translateY(-100%)';
//       element3InfoMarcasList[index].style.transition =
//         'transform 450ms linear 0.1s';
//       elementInfoMarcasList[index].style.transform = 'scale(0.6)';
//       elementInfoMarcasList[index].style.transition = 'transform 400ms linear';
//     };

//     const handleMouseOut = (index) => {
//       element3InfoMarcasList[index].style.transform = '';
//       element3InfoMarcasList[index].style.transition = '';
//       elementInfoMarcasList[index].style.transform = '';
//       elementInfoMarcasList[index].style.transition = '';
//     };

//     for (let i = 0; i < element3InfoMarcasList.length; i++) {
//       const element3InfoMarcas = element3InfoMarcasList[i];
//       // eslint-disable-next-line no-unused-vars
//       const elementInfoMarcas = elementInfoMarcasList[i];

//       element3InfoMarcas.addEventListener('mouseover', () =>
//         handleMouseOver(i)
//       );
//       element3InfoMarcas.addEventListener('mouseout', () => handleMouseOut(i));
//     }

//     const isEdge = window.navigator.userAgent.indexOf('Edge') > -1;
//     const element = document.querySelector(
//       '.image-wrapper-container-info_marcas'
//     );

//     if (isEdge) {
//       element.classList.add('ms-edge');
//     } else {
//       element.classList.add('not-ms-edge');
//     }

//     // Cleanup: remove event listeners when the component unmounts
//     return () => {
//       for (let i = 0; i < element3InfoMarcasList.length; i++) {
//         const element3InfoMarcas = element3InfoMarcasList[i];
//         element3InfoMarcas.removeEventListener('mouseover', () =>
//           handleMouseOver(i)
//         );
//         element3InfoMarcas.removeEventListener('mouseout', () =>
//           handleMouseOut(i)
//         );
//       }
//     };
//   }, []);

//   return (
//     <div className="image-wrapper-container-info_marcas">
//       {' '}
//       {/* Your JSX here */}{' '}
//     </div>
//   );
// };

import '../src/App.css';

const InfoMarcasComponent = () => {
  return (
    <div className="image-wrapper-container-info_marcas">
      {/* Your JSX here */}
    </div>
  );
};

export default InfoMarcasComponent;
