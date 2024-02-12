import React from 'react';

import configClubs from './contents/configClubs';
import { Container, Header, ContainerItens, ImageLogo } from './styles';

function CarouselClub() {
  return (
    <Container>
      <Header>CLUBES</Header>
      <div>
        {configClubs &&
          configClubs.map(club => (
            <ContainerItens key={club.id}>
              <ImageLogo src={club.img} alt="image-logo" title={club.name} />
            </ContainerItens>
          ))}
      </div>
    </Container>
  );
}

export default CarouselClub;
