/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../../../styles/breakepoints';

export const TextContent = styled.p`
  color: white;
  width: 80%;
  font-size: 20px;
  font-style: italic;
  text-align: justify;
  cursor: default;

  @media ${breakepoints.b} {
    font-size: 16px;
    text-align: left;
  }

  @media ${breakepoints.a} {
    font-size: 14px;
  }

  @media ${breakepoints.a} {
    font-size: 12px;
  }

  @media ${breakepoints.m} {
    font-size: 12px;
    text-align: center;
  }

  @media ${breakepoints.z} {
    font-size: 10px;
  }
`;
