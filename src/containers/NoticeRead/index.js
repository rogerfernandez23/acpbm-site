/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
/* eslint-disable radix */
import React from 'react';
import { useParams } from 'react-router-dom';

import Share from '../../assets/icon_share.png';
import FooterComponent from '../../components/FooterComponent';
import HeaderHome from '../../components/HeaderHome';
import { Notices, TextNotice, TextSub } from '../../components/Notices';
import noticesConfig from '../../components/NoticesCarroussel/contents/configNotices';
import ScrollToTop from '../../components/ScrollToTop';
import Credits from '../../credits';
import { Container } from './styles';

function NoticeRead() {
  const { id } = useParams();
  const notice = noticesConfig.find(not => not.id === parseInt(id));

  return (
    <Container>
      <HeaderHome />
      <div className="container-notice">
        {notice && (
          <>
            <div className="container-text">
              <Notices>{notice.title}</Notices>
              <TextSub>{notice.subLabel}</TextSub>
            </div>

            <div className='container-data'>
              <div>
                <p><b>{notice.author}</b> - {notice.location}</p>
                <p>{notice.date}</p>
              </div>
              <img className="image-share" src={Share} alt='compartilhar' title='Compartilhar notícia'/>
            </div>
            <hr />
            <TextNotice>{notice.text}</TextNotice>
            <img className="notice-image" src={notice.img}/>
            <TextNotice>{notice.textb}</TextNotice>
          </>
        )}
      </div>

      <FooterComponent />
      <ScrollToTop />
      <Credits />
    </Container>
  );
}

export default NoticeRead;
