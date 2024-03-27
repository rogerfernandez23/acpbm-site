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
  opacity: 0.98;
  z-index: 3;
  position: fixed;
  width: 100%;
  min-height: 120%;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 420px;
  background-color: #eaeaea;
  border-radius: 75px;
  animation: ${fadeIn} 0.3s ease-out;

  @media ${breakepoints.b} {
    width: 55%;
    height: 440px;
  }

  @media ${breakepoints.a} {
    width: 65%;
  }

  @media ${breakepoints.s} {
    width: 75%;
  }

  @media ${breakepoints.m} {
    width: 80%;
    margin-top: 25%;
    border-radius: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sub {
    color: #a5a5a5;
    margin-top: 5px;
    font-style: italic;
    margin-bottom: 50px;

    @media ${breakepoints.m} {
      font-size: 12px;
      margin-bottom: 30px;
    }
  }
`;

export const EditClub = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media ${breakepoints.m} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-family: 'Changa One';
  color: #a5a5a5;
  margin-bottom: 5px;

  @media ${breakepoints.m} {
    font-size: 18px;
    margin-bottom: 0px;
  }
`;

export const InputName = styled.input`
  width: 400px;
  height: 35px;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  font-size: 14px;
  padding-left: 10px;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    color: black;
    opacity: 0.4;

    @media ${breakepoints.z} {
      font-size: 12px;
    }
  }

  @media ${breakepoints.b} {
    width: 320px;
  }

  @media ${breakepoints.s} {
    width: 300px;
  }

  @media ${breakepoints.z} {
    width: 250px;
    font-size: 12px;
  }
`;

export const InputAbreviate = styled.input`
  width: 120px;
  height: 35px;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  font-size: 14px;
  padding-left: 10px;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    color: black;
    opacity: 0.4;

    @media ${breakepoints.z} {
      font-size: 12px;
    }
  }

  @media ${breakepoints.b} {
    width: 100px;
  }

  @media ${breakepoints.s} {
    width: 80px;
  }

  @media ${breakepoints.z} {
    width: 70px;
    font-size: 12px;
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
  margin-top: 30px;
  border: none;
  outline: none;
  background-color: white;
  color: gray;
  font-size: 16px;
  font-weight: 100;
  padding-left: 10px;
  cursor: pointer;

  @media ${breakepoints.z} {
    width: 250px;
    font-size: 14px;
  }

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
    margin-top: 30px;
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

  @media ${breakepoints.s} {
    width: 150px;
  }

  @media ${breakepoints.m} {
    width: 120px;
    height: 30px;
  }

  @media ${breakepoints.z} {
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

  @media ${breakepoints.s} {
    width: 150px;
  }

  @media ${breakepoints.m} {
    width: 120px;
    height: 30px;
  }

  @media ${breakepoints.z} {
    font-size: 16px;
  }
`;
