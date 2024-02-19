/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import Home from '../../assets/home_icon.jpg';
import User from '../../assets/icon_user.png';
import Logout from '../../assets/logout_icon.png';
import { useUser } from '../../hooks/UserContext';
import { Container, Header } from './styles';

function HeaderUser({ style }) {
  const { userData, logout } = useUser();

  const deslog = () => {
    logout();
  };

  return (
    <Container style={style}>
      <Header>
        <div>
          <img className="user-login" src={User} />
          <p>
            Olá, <br />
            {userData.admin ? 'Administrador' : userData.name}
          </p>
        </div>
        <div>
          <a href="/">
            <button className="blue">
              <img className="home" src={Home} />
              HOME
            </button>
          </a>
          <a href="/">
            <button className="gray" onClick={deslog}>
              <img className="logout" src={Logout} />
              SAIR
            </button>
          </a>
        </div>
      </Header>
    </Container>
  );
}

HeaderUser.propTypes = {
  style: PropTypes.objectOf(PropTypes.string)
};

export default HeaderUser;
