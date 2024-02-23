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
  background-image: url(${Background});
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  animation: ${moveBackground} 20s linear infinite;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  text-align: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e;
  border-radius: 25px;
  width: 320px;
  height: 390px;
  opacity: 0.9;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 280px;
  margin-top: -40px;
  cursor: pointer;
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  width: 290px;
  height: 45px;
  border-radius: 12px;
  margin-top: 18px;
  border: ${props => (props.error ? '0.5px solid red' : 'none')};
  outline: none;
  background-color: #575757;
  padding: 10px;
  color: #ffff;
  font-size: 14px;
  font-weight: 100;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    opacity: 0.4;
    color: #ffff;
  }
`;

export const Register = styled.a`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
  color: #ffff;
  margin-right: 110px;
  margin-top: 14px;
  cursor: default;
`;

export const Form = styled.a`
  color: #ffff;
  opacity: 0.5;
`;

export const Button = styled.button`
  margin-top: 35px;
  height: 40px;
  width: 280px;
  border-radius: 12px;
  font-size: 20px;
  background-color: #aa1a1a;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

export const LabelOneInner = styled.p`
  color: white;
  font-family: 'Changa One';
  font-size: 40px;
  cursor: default;
`;

export const LabelOne = styled.p`
  color: white;
  font-family: 'Changa One';
  font-size: 80px;
  cursor: default;
`;

export const LabelTwo = styled.p`
  color: white;
  font-family: 'Roboto';
  font-style: italic;
  font-size: 16px;
  font-weight: 100;
  margin-top: 5px;
  cursor: default;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 9px;
  margin-left: 5px;
  margin-top: 2px;
`;
