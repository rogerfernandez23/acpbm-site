/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 999;

  @media ${breakepoints.s} {
    right: 6px;
    bottom: 15px;
    width: 35px;
    height: 35px;
  }

  img {
    width: 30px;
    margin-top: 5px;
    transform: rotate(-90deg);

    @media ${breakepoints.s} {
      width: 25px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
