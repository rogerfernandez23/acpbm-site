import React from 'react';

import { Container, ContainerItens, ContainerColumn, H1, P } from './styles';

function Trophies() {
  return (
    <Container>
      <ContainerItens>
        <H1>CAMPEONATOS</H1>
        <br />
        <P>Superliga</P>
        <P>Liga B</P>
        <P>Liga C</P>
        <P>Liga D</P>
        <P>Liga Inicio</P>
        <P>Copa Cartoleiros</P>
        <P>ACPBM Opens!</P>
        <P>Cup! Copa Conferência</P>
        <br />
        <br />
      </ContainerItens>
      <ContainerColumn>
        <P>Libertadores</P>
        <P>Sul-Americana</P>
        <P>Copa Conmebol</P>
        <H1>REGULAMENTO</H1>
        <H1>CALENDÁRIO</H1>
      </ContainerColumn>
    </Container>
  );
}

export default Trophies;
