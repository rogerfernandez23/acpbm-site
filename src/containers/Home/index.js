import React from 'react';

import MarketImg from '../../assets/marketplace_acpbm_site.jpg';
import TroffiesCaroussel from '../../components/CampeonatosCaroussel';
import CarouselClub from '../../components/ClubsCaroussel';
import FooterComponent from '../../components/FooterComponent';
import HeaderHome from '../../components/HeaderHome';
import Marketplace from '../../components/MarkteplaceBanner';
import CarouselNotice from '../../components/NoticesCarroussel';
import ScrollToTop from '../../components/ScrollToTop';
import Credits from '../../credits';
import Video from './iFrame/video';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <HeaderHome />
      <CarouselNotice />
      <CarouselClub />
      <TroffiesCaroussel />
      <div className="divs-home">
        <img src={MarketImg} alt="marketplace" className="banner-market" />
      </div>
      <Marketplace />
      <div className="divs-home">
        <Video />
      </div>
      <FooterComponent />
      <ScrollToTop />
      <Credits />
    </Container>
  );
}

export default Home;
