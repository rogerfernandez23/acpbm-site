import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 25px;
  justify-content: center;
  align-items: center;

  .rec.rec-arrow {
    background-color: transparent;
    border: none;
    color: black;
    box-shadow: none;
  }

  .rec.rec-arrow:hover {
    opacity: 0.6;
    color: red;
  }

  .rec.rec-arrow:disabled {
    opacity: 0.8;
    background-color: transparent;
    color: transparent;
    border: none;
  }

  .rec.rec-dot {
    margin-top: 2px;
  }

  .rec-pagination {
    margin-top: 10px;
  }

  .rec-dot {
    height: 12px;
    width: 12px;
    background-color: black;
    box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0);
  }

  .rec-dot_active {
    height: 12px;
    width: 12px;
    background-color: red;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0);
  }
`;

export const ContainerItens = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  div {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 1, 0.5);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  cursor: pointer;
`;

export const TextTop = styled.p`
  position: absolute;
  font-family: 'Changa One';
  top: 82%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: left;
  font-size: 400%;
  width: 100%;
  font-weight: bold;
`;

export const TextSub = styled.p`
  position: absolute;
  font-weight: 100px;
  bottom: 40px;
  left: 55%;
  transform: translateX(-50%);
  color: #fff;
  text-align: left;
  font-size: 80%;
  width: 100%;
  font-style: italic;
`;
