/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import Seta from '../../assets/seta_voltar.png';
import { ScrollToTopButton } from './styles';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <ScrollToTopButton visible={isVisible} onClick={scrollToTop}>
      <img src={Seta} />
    </ScrollToTopButton>
  );
}

export default ScrollToTop;
