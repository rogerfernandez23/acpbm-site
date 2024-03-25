/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
  height: 6vh;

  @media ${breakepoints.s} {
    height: 4vh;
  }

  p {
    font-size: 14px;
    font-weight: 700;
    color: white;

    @media ${breakepoints.s} {
      font-size: 12px;
    }

    @media ${breakepoints.z} {
      font-size: 10px;
    }
  }

  a {
    color: #aa1a1a;
  }
`;
