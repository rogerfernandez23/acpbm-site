import styled, { keyframes } from 'styled-components';

import breakepoints from '../../../styles/breakepoints';

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
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.99;
  z-index: 3;
  position: fixed;
  width: 100%;
  min-height: 120%;

  @media ${breakepoints.b} {
    min-height: 100%;
    top: 0;
  }
`;

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 250px;
  background-color: #eaeaea;
  border-radius: 40px;

  @media ${breakepoints.b} {
    width: 60%;
  }

  @media ${breakepoints.s} {
    width: 80%;
  }

  @media ${breakepoints.m} {
    width: 90%;
    height: 230px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${breakepoints.m} {
      width: 90%;
    }
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  border-radius: 75px;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Text = styled.p`
  font-size: 24px;
  font-family: 'Changa One';
  color: #a5a5a5;
  margin-bottom: 20px;

  @media ${breakepoints.m} {
    font-size: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 40px;

  @media ${breakepoints.m} {
    gap: 20px;
    margin-top: 20px;
  }
`;

export const Cancel = styled.button`
  height: 38px;
  width: 180px;
  border-radius: 12px;
  font-size: 20px;
  background-color: red;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }

  @media ${breakepoints.m} {
    height: 30px;
    width: 140px;
    font-size: 16px;
  }
`;

export const Save = styled.button`
  height: 38px;
  width: 180px;
  border-radius: 12px;
  font-size: 20px;
  background-color: green;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }

  @media ${breakepoints.m} {
    height: 30px;
    width: 140px;
    font-size: 16px;
  }
`;
