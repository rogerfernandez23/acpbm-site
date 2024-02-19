/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';

import Caution from '../../assets/icon_erro.png';
import { useNavigates } from '../../constants/navigates';
import { Container } from './styles';

function ErrorLogin() {
  const { toHome } = useNavigates();

  return (
    <Container>
      <img className="logo-fed" src={Caution} alt="federacao-acpbm" />
      <h1>
        PARECE QUE SEU CADASTRO
        <br /> AINDA NÃO FOI VALIDADO
      </h1>
      <button onClick={toHome}>VOLTAR A PÁGINA INICIAL</button>
      <h2>AGUARDE AUTORIZAÇÃO</h2>
    </Container>
  );
}

export default ErrorLogin;
