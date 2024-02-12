/* eslint-disable import/no-unresolved */
import React from 'react';

import Logo from '../../assets/logo_banner.png';
import {
  Container,
  ContainerItens,
  Header,
  ImgLogo,
  Text,
  Button
} from './styles';
import TextSub from './Text';

function Marketplace() {
  return (
    <Container>
      <Header>
        <ImgLogo src={Logo} />
        <Text>QUEM SOMOS?</Text>
      </Header>
      <ContainerItens>
        <TextSub />
        <Button>CADASTRE-SE AGORA</Button>
      </ContainerItens>
    </Container>
  );
}

export default Marketplace;
