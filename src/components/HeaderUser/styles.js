import styled from 'styled-components';

import breakepoints from '../../styles/breakepoints';

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 60px;
  align-items: center;

  @media ${breakepoints.z} {
    height: 55px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    font-family: 'Changa One';
    font-size: 16px;
  }

  div {
    display: flex;
    flex-direction: row;
    padding: 5px 45px;

    @media ${breakepoints.s} {
      align-items: center;
      justify-content: center;
      padding: 5px 35px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 150px;
      height: 28px;
      border-radius: 12px;
      margin-left: 35px;
      border: none;
      font-family: 'Changa One';
      cursor: pointer;
      transition: transform 0.5s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      @media ${breakepoints.s} {
        font-size: 0px;
        width: 60px;
        height: 35px;
        gap: 0px;
        margin-left: 20px;
      }

      @media ${breakepoints.z} {
        width: 50px;
        height: 30px;
        margin-left: 10px;
      }
    }

    .blue {
      background-color: #45b2e1;
      color: white;
    }

    .gray {
      background-color: white;
      color: black;
    }
    p {
      color: white;
      margin-left: 10px;
      margin-top: 6px;
      font-size: 16px;
      font-weight: 100;
      cursor: pointer;

      @media ${breakepoints.s} {
        font-size: 14px;
      }

      @media ${breakepoints.m} {
        font-size: 12px;
      }
    }

    .user-login {
      width: 50px;

      @media ${breakepoints.s} {
        width: 44px;
      }

      @media ${breakepoints.z} {
        width: 42px;
      }
    }

    .home {
      width: 20px;
    }

    .logout {
      width: 20px;
    }
  }
`;
