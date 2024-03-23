/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import Background from '../../assets/background_login.jpg';
import breakepoints from '../../styles/breakepoints';

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
  flex-direction: row;
  justify-content: center;
  min-width: 100vw;

  @media ${breakepoints.m} {
    flex-direction: column;
    background-image: url(${Background});
    min-height: 100vh;
    animation: ${moveBackground} 40s linear infinite;
    align-items: center;
  }
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 50%;
  background-color: ${props => (props.width >= 860 ? 'none' : 'black')};

  @media ${breakepoints.m} {
    width: 100%;
    background-color: initial;
  }
`;

export const ContainerRegister = styled.div`
  background-color: ${props => (props.width >= 580 ? '#ab1a1a' : 'black')};
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100vh;

  @media ${breakepoints.m} {
    width: 70%;
    min-height: 360px;
    background-color: black;
    opacity: 0.8;
    margin-top: 30px;
    border-radius: 50px;
  }

  @media ${breakepoints.z} {
    min-height: 340px;
    justify-content: center;
  }
`;

export const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TextRegister = styled.p`
  color: white;
  width: 80%;
  margin-bottom: 40px;
  margin-top: 140px;
  font-family: 'Changa One';
  font-size: 42px;
  font-style: none;
  cursor: default;

  @media ${breakepoints.b} {
    font-size: 34px;
  }

  @media ${breakepoints.a} {
    font-size: 28px;
  }

  @media ${breakepoints.s} {
    font-size: 22px;
    margin-top: 200px;
  }

  @media ${breakepoints.m} {
    font-size: 22px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  @media ${breakepoints.z} {
    font-size: 18px;
    margin-top: 50px;
  }
`;

export const BackScreen = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 50px;
  margin-top: 20px;
  gap: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media ${breakepoints.m} {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const ImgBack = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(180deg);

  @media ${breakepoints.a} {
    width: 15px;
    height: 15px;
  }
`;

export const BackText = styled.p`
  color: white;
  font-family: 'Changa One';
  font-size: 18px;

  @media ${breakepoints.a} {
    font-size: 14px;
  }
`;

export const H1 = styled.p`
  color: white;
  text-align: center;
  font-size: 46px;
  font-family: 'Changa One';
  font-weight: 900;
  margin-top: 9px;
  margin-bottom: 20px;

  @media ${breakepoints.a} {
    font-size: 32px;
    margin-top: 50px;
  }

  @media ${breakepoints.m} {
    font-size: 32px;
    margin-top: 20px;
  }

  @media ${breakepoints.z} {
    font-size: 22px;
    margin-top: 0px;
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 12px;
  margin-top: 18px;
  border: ${props => (props.error ? '3px solid red' : 'none')};
  outline: none;
  background-color: white;
  padding: 15px;
  color: gray;
  font-size: 16px;
  font-weight: 400;

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    color: black;
    opacity: 0.3;

    @media ${breakepoints.a} {
      font-size: 12px;
    }
  }

  @media ${breakepoints.b} {
    height: 45px;
    font-size: 14px;
  }

  @media ${breakepoints.a} {
    height: 38px;
    border: ${props => (props.error ? '2px solid red' : 'none')};
  }

  @media ${breakepoints.m} {
    width: 80%;
    height: 35px;
    margin-top: 6px;
    border-radius: 8px;
  }

  @media ${breakepoints.z} {
    height: 30px;
    margin-top: 8px;
    border: ${props => (props.error ? '1px solid red' : 'none')};
  }
`;

export const Button = styled.button`
  margin-top: 35px;
  margin-left: 45%;
  height: 36px;
  width: 220px;
  border-radius: 12px;
  font-size: 20px;
  background-color: gray;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  @media ${breakepoints.b} {
    margin-left: 0%;
    width: 250px;
  }

  @media ${breakepoints.m} {
    margin-top: 20px;
    border-radius: 8px;
    width: 200px;
    height: 32px;
  }

  @media ${breakepoints.z} {
    width: 180px;
  }
`;

export const ErrorText = styled.p`
  color: gray;
  font-size: 10px;
  margin-right: 60%;
  margin-top: -2px;
  margin-bottom: -8px;

  @media ${breakepoints.a} {
    margin-right: 50%;
  }

  @media ${breakepoints.m} {
    margin-right: 55%;
    margin-top: -8px;
    font-size: 8px;
    color: red;
  }

  @media ${breakepoints.z} {
    margin-right: 45%;
    margin-top: -10px;
  }
`;
