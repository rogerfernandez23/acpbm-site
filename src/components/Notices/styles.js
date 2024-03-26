/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Notice = styled.h1`
  font-size: 62px;
  color: black;
  text-align: center;

  @media ${breakepoints.a} {
    font-size: 52px;
  }

  @media ${breakepoints.z} {
    font-size: 28px;
  }
`;

export const SubText = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  font-style: italic;
  color: black;

  @media ${breakepoints.a} {
    font-size: 14px;
  }

  @media ${breakepoints.z} {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  color: black;
  width: 60%;
  margin: 80px 0;

  @media ${breakepoints.a} {
    font-size: 14px;
    margin: 60px 0;
  }

  @media ${breakepoints.z} {
    width: 80%;
    font-size: 12px;
    margin: 40px 0;
  }
`;
