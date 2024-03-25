import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const CarouselNotices = styled(Carousel)`
  width: 80%;

  @media ${breakepoints.b} {
    width: 100%;
  }

  @media ${breakepoints.a} {
    width: 100%;
  }

  @media ${breakepoints.s} {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
  align-items: center;

  @media ${breakepoints.a} {
    margin-top: 0px;
  }

  @media ${breakepoints.s} {
    justify-content: initial;
    margin-top: 100px;
  }

  @media ${breakepoints.m} {
    margin-top: 80px;
  }

  .rec.rec-arrow {
    background-color: transparent;
    border: none;
    color: black;
    box-shadow: none;

    @media ${breakepoints.s} {
      display: none;
    }
  }

  .rec.rec-arrow:hover {
    opacity: 0.6;
    color: red;
  }

  .rec.rec-arrow:disabled {
    opacity: 0.8;
    background-color: transparent;
    color: transparent;
    border: none;
  }

  .rec.rec-dot {
    margin-top: 2px;
  }

  .rec-pagination {
    margin-top: 10px;

    @media ${breakepoints.s} {
      margin-top: 8px;
    }

    @media ${breakepoints.m} {
      margin-top: 6px;
    }
  }

  .rec-dot {
    height: 12px;
    width: 12px;
    background-color: black;
    box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0);

    @media ${breakepoints.m} {
      height: 8px;
      width: 8px;
    }
  }

  .rec-dot_active {
    height: 12px;
    width: 12px;
    background-color: red;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0);

    @media ${breakepoints.m} {
      height: 8px;
      width: 8px;
    }
  }
`;

export const ContainerItens = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  @media ${breakepoints.a} {
    width: 100%;
  }

  &:hover {
    transform: scale(1.01);
  }

  div {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 1, 0.5);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  cursor: pointer;
`;

export const TextTop = styled.p`
  position: absolute;
  font-family: 'Changa One';
  top: 82%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: left;
  font-size: 400%;
  width: 100%;
  font-weight: bold;

  @media ${breakepoints.i} {
    font-size: 320%;
    top: 80%;
  }

  @media ${breakepoints.a} {
    font-size: 280%;
    top: 78%;
  }

  @media ${breakepoints.s} {
    font-size: 250%;
    top: 82%;
  }

  @media ${breakepoints.m} {
    font-size: 180%;
  }

  @media ${breakepoints.z} {
    font-size: 160%;
    top: 80%;
  }
`;

export const TextSub = styled.p`
  position: absolute;
  font-weight: 100;
  bottom: 40px;
  left: 55%;
  transform: translateX(-50%);
  color: #fff;
  text-align: left;
  font-size: 80%;
  width: 100%;
  font-style: italic;

  @media ${breakepoints.i} {
    font-size: 70%;
  }

  @media ${breakepoints.s} {
    font-size: 60%;
    bottom: 30px;
    font-weight: 500;
  }

  @media ${breakepoints.m} {
    font-size: 50%;
    bottom: 20px;
  }

  @media ${breakepoints.z} {
    font-size: 45%;
  }
`;
