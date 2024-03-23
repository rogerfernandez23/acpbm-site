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
  background-image: url(${Background});
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  animation: ${moveBackground} 20s linear infinite;

  @media ${breakepoints.a} {
    gap: 80px;
    animation: ${moveBackground} 25s linear infinite;
  }

  @media ${breakepoints.s} {
    gap: 50px;
    flex-direction: column;
    animation: ${moveBackground} 50s;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  text-align: center;

  @media ${breakepoints.a} {
    margin-left: 30px;
  }

  @media ${breakepoints.s} {
    margin-left: 0px;
  }
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

  @media ${breakepoints.a} {
    margin-right: 30px;
    max-width: 290px;
  }

  @media ${breakepoints.s} {
    margin-right: 0px;
  }

  @media ${breakepoints.z} {
    max-width: 260px;
    height: 340px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @media ${breakepoints.a} {
    width: 240px;
  }

  @media ${breakepoints.s} {
    width: 220px;
  }

  @media ${breakepoints.z} {
    margin-top: -60px;
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

  @media ${breakepoints.a} {
    width: 250px;
    height: 40px;
    border-radius: 10px;
  }

  @media ${breakepoints.z} {
    width: 230px;
    height: 35px;
    margin-top: 14px;
    font-size: 12px;
    border-radius: 8px;

    &::placeholder {
      font-size: 12px;
    }
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

  @media ${breakepoints.a} {
    margin-right: 70px;
  }

  @media ${breakepoints.z} {
    font-size: 10px;
    margin-top: 10px;
  }
`;

export const Form = styled.a`
  color: #ffff;
  opacity: 0.5;
  cursor: pointer;
  text-decoration: underline;
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

  @media ${breakepoints.a} {
    height: 35px;
    width: 250px;
  }

  @media ${breakepoints.z} {
    height: 30px;
    width: 230px;
    border-radius: 8px;
  }
`;

export const LabelOneInner = styled.p`
  color: white;
  font-family: 'Changa One';
  font-size: 40px;
  cursor: default;

  @media ${breakepoints.a} {
    font-size: 32px;
  }

  @media ${breakepoints.s} {
    font-size: 26px;
  }

  @media ${breakepoints.z} {
    font-size: 22px;
  }
`;

export const LabelOne = styled.p`
  color: white;
  font-family: 'Changa One';
  font-size: 80px;
  cursor: default;

  @media ${breakepoints.a} {
    font-size: 64px;
  }

  @media ${breakepoints.s} {
    font-size: 48px;
  }

  @media ${breakepoints.z} {
    font-size: 38px;
  }
`;

export const LabelTwo = styled.p`
  color: white;
  font-family: 'Roboto';
  font-style: italic;
  font-size: 16px;
  font-weight: 100;
  margin-top: 5px;
  cursor: default;

  @media ${breakepoints.a} {
    font-size: 14px;
  }

  @media ${breakepoints.s} {
    font-size: 12px;
  }

  @media ${breakepoints.z} {
    width: 60%;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 9px;
  margin-left: 5px;
  margin-top: 2px;
`;
