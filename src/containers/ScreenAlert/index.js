/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Caution from '../../assets/manutencao_icon.jpg';
import { Container, ContainerItens } from './styles';

function ScreenAlert() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };
  return (
    <Container>
      <ContainerItens>
        <div>
          <img src={Caution} alt="aviso" />
          <button onClick={toHome}>VOLTAR A PÁGINA INICIAL</button>
        </div>
      </ContainerItens>
    </Container>
  );
}

export default ScreenAlert;
