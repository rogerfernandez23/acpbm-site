import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EditClub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
  width: 90%;
  height: 400px;
  padding: 20px 80px;
  gap: 20px;
  border-radius: 50px;
  background-color: #f7f7f7;

  @media ${breakepoints.a} {
    width: 95%;
  }

  @media ${breakepoints.s} {
    width: 90%;
    padding: 20px;
  }

  @media ${breakepoints.m} {
    flex-direction: column;
  }

  .box-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10%;
    width: 25%;
    height: 50%;

    @media ${breakepoints.a} {
      width: 40%;
      height: 40%;
    }

    @media ${breakepoints.s} {
      width: 45%;
    }

    @media ${breakepoints.m} {
      margin-bottom: 20px;
    }
  }

  .box-name {
    width: 60%;
  }
`;

export const Image = styled.img`
  width: 150px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${breakepoints.a} {
    width: 120px;
  }
`;

export const NameClub = styled.p`
  font-size: 65px;
  font-weight: 700;

  @media ${breakepoints.a} {
    font-size: 48px;
  }

  @media ${breakepoints.s} {
    font-size: 42px;
  }

  @media ${breakepoints.m} {
    text-align: center;
    font-size: 32px;
  }
`;

export const EditButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 12px;
  background-color: #bc2323;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${breakepoints.m} {
    width: 130px;
    height: 30px;
    margin-top: 50px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: italic;
  color: gray;
  font-weight: 100;
  margin-top: 30px;
`;
