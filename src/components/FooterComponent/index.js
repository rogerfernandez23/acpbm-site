import React from 'react';

import LogoFooter from '../../assets/logo_footer.png';
import { Container, ContainerItens, LogoItens, Button } from './styles';
import Trophies from './trophies';
import TrophiesPart from './trophiesPart';

function FooterComponent() {
  return (
    <Container>
      <LogoItens src={LogoFooter} />
      <ContainerItens>
        <Trophies />
        <TrophiesPart />
        <Button>ENTRAR</Button>
      </ContainerItens>
    </Container>
  );
}

export default FooterComponent;
