import styled from 'styled-components';

import breakepoints from '../../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${breakepoints.m} {
    gap: 15px;
  }
`;

export const ContainerItens = styled.div``;

export const ContainerColumn = styled.div``;

export const H1 = styled.h1`
  font-size: 100%;
  color: white;
  font-weight: 100;
  text-align: left;
  cursor: pointer;

  @media ${breakepoints.m} {
    font-size: 12px;
  }
`;

export const P = styled.p`
  color: white;
  font-weight: 100;
  font-size: 12px;
  cursor: pointer;

  @media ${breakepoints.m} {
    font-size: 10px;
  }
`;
