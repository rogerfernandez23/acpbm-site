/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../../../styles/breakepoints';

export const Container = styled.p`
  width: 60%;
  margin: 25px 0;
  font-style: italic;
  font-size: 26px;
  margin-left: 50px;

  @media ${breakepoints.b} {
    font-size: 22px;
  }

  @media ${breakepoints.a} {
    font-size: 18px;
  }

  @media ${breakepoints.s} {
    width: 70%;
    font-size: 16px;
  }

  @media ${breakepoints.m} {
    font-size: 14px;
    text-align: center;
    margin-left: 0px;
  }

  @media ${breakepoints.z} {
    font-size: 12px;
  }
`;
