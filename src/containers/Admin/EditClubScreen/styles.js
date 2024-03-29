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
  height: 490px;
  background-color: #eaeaea;
  border-radius: 60px;

  @media ${breakepoints.b} {
    width: 60%;
  }

  @media ${breakepoints.s} {
    width: 80%;
  }

  @media ${breakepoints.m} {
    width: 90%;
  }

  form {
    display: flex;
    flex-direction: column;

    @media ${breakepoints.m} {
      width: 80%;
    }
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 75px;
  animation: ${fadeIn} 0.3s ease-out;

  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-family: 'Changa One';
  color: #a5a5a5;
  margin-bottom: 20px;
`;

export const InputName = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  background-color: white;
  color: gray;
  font-size: 12px;
  padding-left: 10px;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    color: black;
    opacity: 0.6;
  }

  @media ${breakepoints.m} {
    width: 100%;
  }
`;

export const InputAbreviate = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  background-color: white;
  color: gray;
  font-size: 12px;
  padding-left: 10px;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    color: black;
    opacity: 0.6;
  }

  @media ${breakepoints.m} {
    width: 100%;
  }
`;

export const LabelImport = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 130px;
  border-radius: 20px;
  margin-top: 10px;
  border: none;
  outline: none;
  background-color: white;
  color: gray;
  font-size: 16px;
  font-weight: 100;
  padding-left: 10px;
  cursor: pointer;

  img {
    width: 15%;
    opacity: 0.4;
  }

  input {
    display: none;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: black;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 40px;

  @media ${breakepoints.m} {
    gap: 20px;
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
`;
