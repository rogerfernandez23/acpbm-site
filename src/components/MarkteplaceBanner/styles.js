import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.6) 0%,
    rgba(232, 228, 228, 0.11) 54%,
    rgba(255, 255, 255, 0.6) 100%
  );
  border-radius: 50px;
  margin-bottom: 100px;

  @media ${breakepoints.i} {
    width: 80%;
  }

  @media ${breakepoints.a} {
    width: 90%;
  }
`;

export const ContainerItens = styled.div`
  width: 100%;
  margin-left: 10%;

  @media ${breakepoints.m} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ImgLogo = styled.img`
  width: 300px;

  @media ${breakepoints.b} {
    width: 250px;
  }

  @media ${breakepoints.a} {
    width: 230px;
  }

  @media ${breakepoints.s} {
    width: 200px;
  }

  @media ${breakepoints.m} {
    width: 140px;
  }

  @media ${breakepoints.z} {
    width: 120px;
  }
`;

export const Text = styled.p`
  font-family: 'Changa One';
  font-size: 45px;

  @media ${breakepoints.b} {
    font-size: 40px;
  }

  @media ${breakepoints.l} {
    font-size: 36px;
  }

  @media ${breakepoints.a} {
    font-size: 32px;
  }

  @media ${breakepoints.s} {
    font-size: 24px;
  }

  @media ${breakepoints.m} {
    font-size: 18px;
  }

  @media ${breakepoints.z} {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-top: 35px;
  margin-left: 50px;
  height: 45px;
  width: 220px;
  border-radius: 12px;
  font-size: 20px;
  background-color: #aa1a1a;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${breakepoints.a} {
    width: 200px;
    height: 40px;
    font-size: 16px;
  }

  @media ${breakepoints.s} {
    margin-top: 25px;
    width: 180px;
    height: 35px;
    font-size: 16px;
  }

  @media ${breakepoints.m} {
    margin-left: 0px;
  }

  @media ${breakepoints.z} {
    width: 160px;
    height: 30px;
    font-size: 14px;
    margin-top: 15px;
  }
`;
