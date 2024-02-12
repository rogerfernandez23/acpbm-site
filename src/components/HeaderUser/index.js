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
  const { userData } = useUser();
  return (
    <Container style={style}>
      <Header>
        <div>
          <img className="user-login" src={User} />
          <p>
            Olá, <br />
            {userData.name}
          </p>
        </div>
        <div>
          <button className="blue">
            <img className="home" src={Home} />
            HOME
          </button>
          <button className="gray">
            <img className="logout" src={Logout} />
            SAIR
          </button>
        </div>
      </Header>
    </Container>
  );
}

HeaderUser.propTypes = {
  style: PropTypes.func.isRequired
};

export default HeaderUser;
