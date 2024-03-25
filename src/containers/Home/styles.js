/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .divs-home {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

    @media ${breakepoints.s} {
      margin-bottom: 50px;
    }
  }

  .banner-market {
    width: 70%;
    border-radius: 25px;
    cursor: pointer;
  }
`;
