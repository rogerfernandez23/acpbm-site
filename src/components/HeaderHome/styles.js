import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  align-items: center;
  background-color: black;
  height: 60px;
  width: 100%;
  box-shadow:
    0px 2.269px 2.74px 0px rgba(0, 0, 0, 0.04),
    0px 5.453px 6.584px 0px rgba(0, 0, 0, 0.06),
    0px 10.268px 12.396px 0px rgba(0, 0, 0, 0.08),
    0px 18.316px 22.113px 0px rgba(0, 0, 0, 0.1),
    0px 34.258px 41.36px 0px rgba(0, 0, 0, 0.12),
    0px 82px 99px 0px rgba(0, 0, 0, 0.16);

  transition: opacity 0.4s ease;
  opacity: ${props => (props.scrolled ? '0.6' : '1')};

  &:hover {
    opacity: 1;
  }

  nav {
    position: fixed;
    top: 70px;
    left: 2%;
    transition: all 0.3s ease;
    width: 18%;
    height: 44%;
    padding: 25px 20px;
    border-radius: 30px;
    background: #fff;

    a {
      margin-left: 10px;
      text-decoration: none;
      color: inherit;
      font-size: 16px;
      font-weight: 100;
      cursor: pointer;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 6px;
      display: flex;
      flex-direction: row;
      transition: transform 0.1s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .menu.active {
    background-color: white;
  }

  .menu.inactive {
    opacity: 0;
    top: 50px;
    left: 100%;
  }
`;

export const DropHeader = styled.div`
  padding-left: 25px;

  .menu-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  img {
    width: 70px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 35px;
    margin-top: 2px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const LinksAcess = styled.div`
  display: flex;
  align-items: center;
  padding-right: 25px;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  .insta {
    width: 22px;
    margin-top: 3px;
  }

  .youtube {
    width: 25px;
    margin-right: 8px;
    margin-top: 4px;
  }

  .login {
    width: 32px;
  }

  p {
    color: white;
    font-size: 14px;
    font-weight: 100;
  }

  .button-header {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 4px;
    width: 30%;
    height: 15px;
    border-radius: 8px;
    background-color: white;
    color: black;
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .log {
    &:hover {
      color: grey;
    }
  }

  .log-a {
    text-decoration: none;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`;
