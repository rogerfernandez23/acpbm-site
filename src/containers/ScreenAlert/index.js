/* eslint-disable react/button-has-type */
import React from 'react';

import Caution from '../../assets/manutencao_icon.jpg';
import { useNavigates } from '../../constants/navigates';
import { Container, ContainerItens } from './styles';

function ScreenAlert() {
  const { toHome } = useNavigates();

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
