/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

import Insta from '../../../assets/insta_logo.png';
import Youtube from '../../../assets/youtube_logo.png';
import { useNavigates } from '../../../constants/navigates';
import { useUser } from '../../../hooks/UserContext';
import { Container, ContainerLinks, ContainerItens } from './styles';

function MaskMobile({ onClose }) {
  const mobileRef = useRef();
  const { userData } = useUser();
  const { toLogin, toRegister, toLogout, toUsers, toAdmin } = useNavigates();

  useEffect(() => {
    const handleMenu = event => {
      if (!mobileRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleMenu);

    return () => {
      document.removeEventListener('mousedown', handleMenu);
    };
  }, []);

  const userProfile = () => {
    if (userData.admin) {
      toAdmin();
    } else {
      toUsers();
    }
  };

  return (
    <Container ref={mobileRef} userData={userData}>
      {userData.name ? (
        <ContainerLinks>
          <h3>
            Olá,
            <br />
            {userData.name}
          </h3>
          <p>
            <a onClick={userProfile}>Acessar seu perfil</a>
            <br />
          </p>
          <p>
            <a onClick={toLogout}>Sair</a>
          </p>
        </ContainerLinks>
      ) : (
        <ContainerLinks>
          <p>
            <a onClick={toLogin}>Login</a> <br />
          </p>
          <p>
            <a onClick={toRegister}>Cadastre-se</a>
          </p>
        </ContainerLinks>
      )}
      <ContainerItens>
        <a href="https://www.instagram.com/facpbm/" target="blank">
          <img
            className="insta"
            src={Insta}
            alt="instagram"
            title="Ir ao Instagram"
          />
        </a>
        <a href="https://www.youtube.com/@federacaoacpbm6936" target="blank">
          <img
            className="youtube"
            src={Youtube}
            alt="youtube"
            title="Ir ao YouTube"
          />
        </a>
      </ContainerItens>
    </Container>
  );
}

MaskMobile.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default MaskMobile;
