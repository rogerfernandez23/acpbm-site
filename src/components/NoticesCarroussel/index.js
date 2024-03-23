/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import noticesConfig from './contents/configNotices';
import {
  Container,
  CarouselNotices,
  ContainerItens,
  Image,
  TextTop,
  TextSub
} from './styles';

function CarouselNotice() {
  const navigate = useNavigate();

  const currentId = id => {
    navigate(`/noticia/${id}`);
  };

  return (
    <Container>
      <CarouselNotices itemsToShow={1}>
        {noticesConfig &&
          noticesConfig.map(notice => (
            <ContainerItens key={notice.id}>
              <div onClick={() => currentId(notice.id)}>
                <Image src={notice.img} alt="noticia-foto" />
              </div>
              <TextTop>{notice.label}</TextTop>
              <TextSub>{notice.subLabel}</TextSub>
            </ContainerItens>
          ))}
      </CarouselNotices>
    </Container>
  );
}

export default CarouselNotice;
