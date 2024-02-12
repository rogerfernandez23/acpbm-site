/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Caution from '../../assets/icon_erro.png';
import { Container } from './styles';

function ErrorLogin() {
  const navigate = useNavigate();

  const click = () => {
    navigate('/');
  };

  return (
    <Container>
      <img className="logo-fed" src={Caution} alt="federacao-acpbm" />
      <h1>
        PARECE QUE SEU CADASTRO
        <br /> AINDA NÃO FOI VALIDADO
      </h1>
      <button onClick={click}>VOLTAR A PÁGINA INICIAL</button>
      <h2>AGUARDE AUTORIZAÇÃO</h2>
    </Container>
  );
}

export default ErrorLogin;
