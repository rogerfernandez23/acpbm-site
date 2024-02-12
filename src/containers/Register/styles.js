/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100vw;
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
`;

export const ContainerRegister = styled.div`
  background-color: #ab1a1a;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100vh;
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
  margin-left: 50px;
  margin-bottom: 40px;
  margin-top: 140px;
  font-family: 'Changa One';
  font-size: 42px;
  font-style: none;
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
    opacity: 0.8;
  }
`;

export const ImgBack = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
`;

export const BackText = styled.p`
  color: white;
  font-family: 'Changa One';
  font-size: 18px;
`;

export const H1 = styled.p`
  color: white;
  text-align: center;
  font-size: 46px;
  font-family: 'Changa One';
  font-weight: 900;
  margin-top: 9px;
  margin-bottom: 20px;
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
    transform: scale(1.1);
  }
`;

export const ErrorText = styled.p`
  color: gray;
  font-size: 10px;
  margin-right: 60%;
  margin-top: -2px;
  margin-bottom: -8px;
`;
