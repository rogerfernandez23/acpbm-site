/* eslint-disable radix */
import React from 'react';
import { useParams } from 'react-router-dom';

import FooterComponent from '../../components/FooterComponent';
import HeaderHome from '../../components/HeaderHome';
import { Notices, TextNotice, TextSub } from '../../components/Notices';
import noticesConfig from '../../components/NoticesCarroussel/contents/configNotices';
import ScrollToTop from '../../components/ScrollToTop';
import Credits from '../../credits';
import { Container, Nav } from './styles';

function NoticeRead() {
  const { id } = useParams();
  const notice = noticesConfig.find(not => not.id === parseInt(id));

  return (
    <Container>
      <HeaderHome />
      <div className="container-notice">
        {notice && (
          <div className="container-text">
            <Notices>{notice.title}</Notices>
            <TextSub>{notice.subLabel}</TextSub>
            <p>Por redação ACPBM - Bahia, Brazil</p>
            <p>{notice.text}</p>
            <TextNotice>{notice.text}</TextNotice>
          </div>
        )}
        <Nav>ALGO AQUI</Nav>
      </div>
      <FooterComponent />
      <ScrollToTop />
      <Credits />
    </Container>
  );
}

export default NoticeRead;
