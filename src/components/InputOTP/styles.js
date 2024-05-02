/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  background-color: black;
  opacity: 0.8;
  width: 50%;
  height: 120px;
  border-radius: 20px;
  align-items: center;

  @media ${breakepoints.s} {
    width: 95%;
    height: 80px;
    border-radius: 12px;
  }
`;
