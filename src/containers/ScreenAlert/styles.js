/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div``;

export const ContainerItens = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
      animation: ${fadeIn} 1s ease-out;
    }

    button {
      margin-left: -47%;
      height: 40px;
      width: 260px;
      border-radius: 12px;
      font-size: 20px;
      background-color: #aa1a1a;
      border: none;
      color: white;
      font-family: 'Changa One';
      cursor: pointer;
      animation: ${fadeIn} 0.8s ease-out;
      transition: transform 0.4s ease-in-out;

      &:hover {
        opacity: 0.9;
        transform: scale(1.02);
      }
    }
  }
`;
