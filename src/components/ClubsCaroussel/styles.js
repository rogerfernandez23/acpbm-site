import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media ${breakepoints.z} {
    height: 140px;
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    background-color: #fcfcfc;

    @media ${breakepoints.a} {
      width: 95%;
    }

    @media ${breakepoints.s} {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(12%, 2fr));
    }

    @media ${breakepoints.z} {
      width: 90%;
    }
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.p`
  font-family: 'Changa One';
  font-size: 40px;
  text-align: center;
  margin: 40px auto;

  @media ${breakepoints.a} {
    font-size: 32px;
  }

  @media ${breakepoints.z} {
    font-size: 22px;
    margin: 20px auto;
  }
`;

export const ImageLogo = styled.img`
  width: 60%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.2);
  }

  @media ${breakepoints.l} {
    width: 80%;
  }

  @media ${breakepoints.a} {
    width: 85%;
  }
`;
