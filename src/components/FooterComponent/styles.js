import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${breakepoints.s} {
    padding: 25px;
  }

  .image-logo {
    display: flex;
    align-items: center;
  }
`;

export const LogoItens = styled.img`
  width: 200px;

  @media ${breakepoints.s} {
    width: 160px;
  }
`;

export const ContainerItens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  .button-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 130px;
  border-radius: 12px;
  font-size: 16px;
  background-color: gray;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media ${breakepoints.s} {
    width: 100px;
    height: 25px;
    font-size: 14px;
  }
`;

export const Text = styled.p`
  color: white;
`;
