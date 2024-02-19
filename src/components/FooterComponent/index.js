import React from 'react';

import LogoFooter from '../../assets/logo_footer.png';
import { useNavigates } from '../../constants/navigates';
import { Container, ContainerItens, LogoItens, Button } from './styles';
import Trophies from './trophies';
import TrophiesPart from './trophiesPart';

function FooterComponent() {
  const { toLogin } = useNavigates();
  return (
    <Container>
      <LogoItens src={LogoFooter} />
      <ContainerItens>
        <Trophies />
        <TrophiesPart />
        <Button onClick={toLogin}>ENTRAR</Button>
      </ContainerItens>
    </Container>
  );
}

export default FooterComponent;
