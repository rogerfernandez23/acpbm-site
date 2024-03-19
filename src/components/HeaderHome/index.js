/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react';

import LogoFed from '../../assets/acpbm_logo.png';
import Calendar from '../../assets/calendar.png';
import Clubs from '../../assets/club_image_menu.png';
import Menu from '../../assets/icon_menu.png';
import User from '../../assets/icon_user.png';
import Insta from '../../assets/insta_logo.png';
import Market from '../../assets/marketplace_icon.png';
import Rules from '../../assets/rules.png';
import Trophies from '../../assets/trophie.png';
import Youtube from '../../assets/youtube_logo.png';
import { useNavigates } from '../../constants/navigates';
import Doc from '../../docs/regulamento.pdf';
import { useUser } from '../../hooks/UserContext';
import { Container, DropHeader, Logo, LinksAcess } from './styles';

function HeaderHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const menuRef = useRef();
  const { userData } = useUser();
  const { toLogin, toRegister, toFrezze, toLogout } = useNavigates();

  const idHeader = () => {
    if (userData.name) {
      return (
        <>
          <p>Olá, {userData.name}</p>
          <a className="log-a" href={userData.admin ? '/adm' : '/usuario'}>
            <p className="log" style={{ fontSize: '11px', fontWeight: '500' }}>
              Acesse seu perfil
            </p>
          </a>
          <button className="button-header" onClick={toLogout}>
            Sair
          </button>
        </>
      );
    }
    return (
      <p>
        Faça <a onClick={toLogin}>Login</a> <br /> ou{' '}
        <a onClick={toRegister}>Cadastre-se</a>
      </p>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleMenu = event => {
      if (!menuRef.current.contains(event.target)) {
        setMenuOn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleMenu);
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <DropHeader className="menu-container" ref={menuRef}>
        <div
          onClick={() => {
            setMenuOn(!menuOn);
          }}
        >
          <img className="menu-image" src={Menu} alt="menu-side" />
        </div>
        <nav className={`menu ${menuOn ? 'active' : 'inactive'}`}>
          <ul>
            <li>
              <div>
                <img
                  style={{ width: '22px', marginLeft: '2px' }}
                  src={Trophies}
                  alt="campeonatos"
                />
              </div>
              <a style={{ marginTop: '5px' }} onClick={toFrezze}>
                CAMPEONATOS
              </a>
            </li>
            <li>
              <img
                style={{ width: '18px', marginLeft: '4px' }}
                src={Clubs}
                alt="clubes"
              />
              <a onClick={toFrezze}>CLUBES</a>
            </li>
            <li>
              <img
                style={{ width: '20px', marginLeft: '4px' }}
                src={Rules}
                alt="regulamento"
              />
              <a href={Doc} download="regulamento.pdf">
                REGULAMENTO
              </a>
            </li>
            <li>
              <img
                style={{ width: '18px', marginLeft: '6px' }}
                src={Calendar}
                alt="calendario"
              />
              <a onClick={toFrezze}>CALENDÁRIO</a>
            </li>
            <li>
              <img
                style={{ width: '24px', marginLeft: '4px' }}
                src={Market}
                alt="marketplace"
              />
              <a onClick={toFrezze}>MARKETPLACE</a>
            </li>
          </ul>
        </nav>
      </DropHeader>
      <Logo>
        <a href="/">
          <img
            className="logo-acpbm"
            src={LogoFed}
            alt="logo-federacao"
            title="Federação ACPBM"
          />
        </a>
      </Logo>
      <LinksAcess>
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
        <img
          className="login"
          src={User}
          alt="login-user"
          title="Acessar ou Cadastrar sua conta"
        />
        <div>{idHeader()}</div>
      </LinksAcess>
    </Container>
  );
}

export default HeaderHome;
