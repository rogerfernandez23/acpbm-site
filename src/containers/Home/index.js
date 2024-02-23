import React from 'react';

import TroffiesCaroussel from '../../components/CampeonatosCaroussel';
import CarouselClub from '../../components/ClubsCaroussel';
import FooterComponent from '../../components/FooterComponent';
import HeaderHome from '../../components/HeaderHome';
import Marketplace from '../../components/MarkteplaceBanner';
import CarouselNotice from '../../components/NoticesCarroussel';
import ScrollToTop from '../../components/ScrollToTop';
import { Container } from './styles';
import Video from './video';

function Home() {
  return (
    <Container>
      <HeaderHome />
      <CarouselNotice />
      <CarouselClub />
      <TroffiesCaroussel />
      <Marketplace />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '50px'
        }}
      >
        <Video />
      </div>
      <FooterComponent />
      <ScrollToTop />
    </Container>
  );
}

export default Home;
