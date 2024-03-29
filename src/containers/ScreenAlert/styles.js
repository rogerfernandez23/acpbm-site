/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItens = styled.div`
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: 0 auto;
    width: 60%;
    animation: ${fadeIn} 1s ease-out;

    @media ${breakepoints.b} {
      width: 80%;
    }
  }

  button {
    margin-top: 50px;
    height: 40px;
    width: 260px;
    border-radius: 12px;
    font-size: 20px;
    background-color: #aa1a1a;
    border: none;
    color: white;
    font-family: 'Changa One';
    cursor: pointer;
    animation: ${fadeIn} 1.5s ease-out;
    transition: transform 0.4s ease-in-out;

    &:hover {
      opacity: 0.9;
      transform: scale(1.02);
    }

    @media ${breakepoints.z} {
      height: 32px;
      width: 220px;
      font-size: 16px;
    }
  }
`;
