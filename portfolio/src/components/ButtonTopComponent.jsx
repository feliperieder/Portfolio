import React, { useEffect, useState } from 'react';
import Arrow from "../assets/arrow-up.svg";
import myCSS from "./ButtonTopComponent.module.css";
import { HashLink } from 'react-router-hash-link';

const ButtonTopComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  /*é definido o booleano e a função que altera o valor*/

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 700); //Se o scroll passou dos 700 pixels, isVisible = true
    };

    window.addEventListener('scroll', handleScroll); // Escuta o evento de scroll
    return () => window.removeEventListener('scroll', handleScroll); //Remve o listener por questões de memória
  }, []);

  return (
    <HashLink smooth to="#top" title="Go to Top" className={`${myCSS.goTop} ${isVisible ? myCSS.visible : ''}`}> {/*Se is visible === true =>visible se dor false ele vai para um azio, onde fica apenas com as propriedades do goTop */}
      <img src={Arrow} alt="Go To Top" className={myCSS.goTopImg} />
    </HashLink>
  );
};

export default ButtonTopComponent;