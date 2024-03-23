import styled from 'styled-components';

import breakepoints from '../../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  right: 4%;
  width: 180px;
  height: ${props => (props.userData ? '180px' : '160px')};
  background-color: black;
  border-radius: 30px;
  padding: 25px;

  @media ${breakepoints.z} {
    top: 65px;
    width: 160px;
    height: 150px;
    justify-content: center;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    color: white;
    font-size: 16px;
    margin-bottom: 10px;

    @media ${breakepoints.z} {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }

  p {
    color: white;
    font-size: 14px;
    font-weight: 100;

    @media ${breakepoints.z} {
      font-size: 12px;
    }
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 14px;

  .youtube {
    margin-right: 0px;
  }
`;
