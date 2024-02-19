/* eslint-disable import/no-unresolved */
import React from 'react';

import Logo from '../../assets/logo_banner.png';
import { useNavigates } from '../../constants/navigates';
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
  const { toRegister } = useNavigates();
  return (
    <Container>
      <Header>
        <ImgLogo src={Logo} />
        <Text>QUEM SOMOS?</Text>
      </Header>
      <ContainerItens>
        <TextSub />
        <Button onClick={toRegister}>CADASTRE-SE AGORA</Button>
      </ContainerItens>
    </Container>
  );
}

export default Marketplace;
