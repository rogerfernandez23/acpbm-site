/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import Background from '../../assets/background_login.jpg';

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Background});
  min-height: 100vh;
  animation: ${moveBackground} 20s linear infinite;

  h1 {
    color: white;
    font-family: 'Changa One';
    font-size: 48px;
  }

  h2 {
    color: white;
    margin: 30px;
    font-family: 'Changa One';
    font-size: 24px;
  }

  button {
    margin-top: 35px;
    height: 40px;
    width: 260px;
    border-radius: 12px;
    font-size: 20px;
    background-color: #aa1a1a;
    border: none;
    color: white;
    font-family: 'Changa One';
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .logo-fed {
    width: 150px;
  }

  .insta {
    margin-right: 15px;
    width: 22px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .youtube {
    margin-bottom: 2px;
    width: 27px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
