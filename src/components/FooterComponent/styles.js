import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  height: 302px;
  display: flex;
  flex-direction: row;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`;

export const LogoItens = styled.img`
  margin-right: 50px;
  width: 200px;
  height: 120px;
  margin: 80px;
  margin-left: 280px;
`;

export const Button = styled.button`
  margin-top: 30%;
  margin-left: 25px;
  height: 30px;
  width: 130px;
  border-radius: 12px;
  font-size: 16px;
  background-color: gray;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Text = styled.p`
  color: white;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;
