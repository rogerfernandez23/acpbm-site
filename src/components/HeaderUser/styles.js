import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 60px;
  align-items: center;
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

      &:hover {
        opacity: 0.8;
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
    }

    .user-login {
      width: 50px;
    }

    .home {
      width: 20px;
    }

    .logout {
      width: 20px;
    }
  }
`;
