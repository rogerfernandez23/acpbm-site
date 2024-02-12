import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.6) 0%,
    rgba(232, 228, 228, 0.11) 54%,
    rgba(255, 255, 255, 0.6) 100%
  );
  border-radius: 50px;
  margin-bottom: 100px;
`;

export const ContainerItens = styled.div`
  width: 100%;
  margin-left: 10%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
`;

export const ImgLogo = styled.img`
  width: 500px;
  margin-left: -5%;
`;

export const Text = styled.p`
  margin-top: 80px;
  font-family: 'Changa One';
  font-size: 45px;
`;

export const Button = styled.button`
  margin-top: 35px;
  margin-left: 50px;
  height: 45px;
  width: 220px;
  border-radius: 12px;
  font-size: 20px;
  background-color: #aa1a1a;
  border: none;
  color: white;
  font-family: 'Changa One';
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
