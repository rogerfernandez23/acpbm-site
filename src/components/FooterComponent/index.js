import React from 'react';

import LogoFooter from '../../assets/logo_footer.png';
import { useNavigates } from '../../constants/navigates';
import { Container, ContainerItens, LogoItens, Button } from './styles';
import Trophies from './Texts';

function FooterComponent() {
  const { toLogin } = useNavigates();
  return (
    <Container>
      <div className="image-logo">
        <LogoItens src={LogoFooter} />
      </div>
      <ContainerItens>
        <Trophies />
        <div className="button-div">
          <Button onClick={toLogin}>ENTRAR</Button>
        </div>
      </ContainerItens>
    </Container>
  );
}

export default FooterComponent;
