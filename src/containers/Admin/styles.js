/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #f9f9f9;
  border-radius: 75px;
  width: 90%;
  height: 500px;
  margin-top: 30px;

  @media ${breakepoints.l} {
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding: 20px;
  }

  @media ${breakepoints.a} {
    width: 80%;
  }

  @media ${breakepoints.z} {
    width: 90%;
    border-radius: 50px;
    margin-top: 20px;
    gap: 25px;
  }
`;

export const ContainerManager = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 20%;
  height: 425px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media ${breakepoints.l} {
    width: 60%;
    height: 280px;
  }

  @media ${breakepoints.m} {
    width: 80%;
  }

  @media ${breakepoints.z} {
    width: 70%;
    border-radius: 40px;
    height: 220px;
  }
`;

export const ImgManager = styled.img`
  width: 180px;
  cursor: pointer;

  @media ${breakepoints.l} {
    width: 140px;
    margin-top: 10px;
  }

  @media ${breakepoints.z} {
    width: 100px;
  }
`;

export const ManageButton = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 30%;
  border-radius: 14px;
  background-color: #b22323;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media ${breakepoints.l} {
    width: 180px;
    height: 22px;
    margin-top: 15%;
    font-size: 16px;
  }

  @media ${breakepoints.z} {
    width: 160px;
    border-radius: 8px;
    font-size: 12px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: italic;
  color: gray;
  font-weight: 100;
  margin-top: 12px;

  @media ${breakepoints.l} {
    margin: 20px 0;
  }

  @media ${breakepoints.z} {
    font-size: 14px;
  }
`;
