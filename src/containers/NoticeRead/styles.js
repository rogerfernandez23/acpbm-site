import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container-notice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;

    @media ${breakepoints.z} {
      margin-top: 50px;
      margin-bottom: 20px;
      padding: 20px;
    }
  }

  .container-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5px;

    @media ${breakepoints.z} {
      width: 80%;
      align-items: center;
    }

    p {
      font-size: 12px;
      font-weight: 400;

      @media ${breakepoints.z} {
        font-size: 10px;
      }
    }
  }

  .image-share {
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    @media ${breakepoints.a} {
      width: 26px;
      height: 26px;
    }

    @media ${breakepoints.z} {
      width: 20px;
      height: 20px;
    }
  }

  .notice-image {
    width: 60%;

    @media ${breakepoints.z} {
      width: 80%;
    }
  }

  hr {
    width: 60%;

    @media ${breakepoints.z} {
      width: 80%;
    }
  }
`;

export const Nav = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: none;
  border: none;
`;
