import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fcfcfc;
    width: 80%;
    height: 66px;
    border-radius: 50px;
    margin-bottom: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ContainerItens = styled.div``;

export const Header = styled.p`
  font-family: 'Changa One';
  font-size: 40px;
  text-align: center;
  margin: 40px auto;
`;

export const ImageLogo = styled.img`
  margin-top: 20px;
  width: 50%;
  height: 55%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
