/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/acpbm_logo.png';
import Insta from '../../assets/insta_logo.png';
import Yt from '../../assets/youtube_logo.png';
import { Container } from './styles';

function LogoutScreen() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <img className="logo-fed" src={Logo} alt="federacao-acpbm" />
      <h1>NÃO FIQUE SEM ATUALIZAÇÕES</h1>
      <button onClick={toHome}>VOLTAR A PÁGINA INICIAL</button>
      <h2>OU ACESSE NOSSAS REDES SOCIAIS:</h2>
      <div>
        <a href="https://www.instagram.com/facpbm/">
          <img className="insta" src={Insta} alt="instagram" />
        </a>
        <a href="https://www.youtube.com/@federacaoacpbm6936">
          <img className="youtube" src={Yt} alt="youtube" />
        </a>
      </div>
    </Container>
  );
}

export default LogoutScreen;
