import { useEffect } from 'react';
import '../src/App.css';

const BlueHover = () => {
  useEffect(() => {
    const descriptionMarcasList = document.querySelectorAll(
      '.description-marcas'
    );

    const handleDescriptionHover = (index) => {
      descriptionMarcasList[index].style.color = 'blue';
    };

    const handleDescriptionLeave = (index) => {
      descriptionMarcasList[index].style.color = ''; // Reset to default color
    };

    for (let i = 0; i < descriptionMarcasList.length; i++) {
      const descriptionMarcas = descriptionMarcasList[i];

      descriptionMarcas.addEventListener('mouseover', () =>
        handleDescriptionHover(i)
      );
      descriptionMarcas.addEventListener('mouseout', () =>
        handleDescriptionLeave(i)
      );
    }

    // Cleanup: remove event listeners when the component unmounts
    return () => {
      for (let i = 0; i < descriptionMarcasList.length; i++) {
        const descriptionMarcas = descriptionMarcasList[i];
        descriptionMarcas.removeEventListener('mouseover', () =>
          handleDescriptionHover(i)
        );
        descriptionMarcas.removeEventListener('mouseout', () =>
          handleDescriptionLeave(i)
        );
      }
    };
  }, []);

  return (
    <div className="image-wrapper-container-info_marcas">
      {/* Your JSX here */}
    </div>
  );
};

export default BlueHover;
