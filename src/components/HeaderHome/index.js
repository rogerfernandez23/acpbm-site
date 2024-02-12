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
import { Container, DropHeader, Logo, LinksAcess } from './styles';

function HeaderHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const menuRef = useRef();

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
      <DropHeader
        className="menu-container"
        onClick={() => {
          setMenuOn(!menuOn);
        }}
      >
        <img className="menu-image" src={Menu} alt="menu-side" />
      </DropHeader>
      <nav className={`menu ${menuOn ? 'active' : 'inactive'}`} ref={menuRef}>
        <ul>
          <li>
            <div>
              <img
                style={{ width: '22px', marginLeft: '2px' }}
                src={Trophies}
                alt="campeonatos"
              />
            </div>
            <a style={{ marginTop: '5px' }} href="#">
              CAMPEONATOS
            </a>
          </li>
          <li>
            <img
              style={{ width: '18px', marginLeft: '4px' }}
              src={Clubs}
              alt="clubes"
            />
            <a href="#">CLUBES</a>
          </li>
          <li>
            <img
              style={{ width: '20px', marginLeft: '4px' }}
              src={Rules}
              alt="regulamento"
            />
            <a href="#">REGULAMENTO</a>
          </li>
          <li>
            <img
              style={{ width: '18px', marginLeft: '6px' }}
              src={Calendar}
              alt="calendario"
            />
            <a href="#">CALENDÁRIO</a>
          </li>
          <li>
            <img
              style={{ width: '24px', marginLeft: '4px' }}
              src={Market}
              alt="marketplace"
            />
            <a href="#">MARKETPLACE</a>
          </li>
        </ul>
      </nav>
      <Logo>
        <img
          className="logo-acpbm"
          src={LogoFed}
          alt="logo-federacao"
          title="Federação ACPBM"
        />
      </Logo>
      <LinksAcess>
        <img
          className="insta"
          src={Insta}
          alt="instagram"
          title="Ir ao Instagram"
        />
        <img
          className="youtube"
          src={Youtube}
          alt="youtube"
          title="Ir ao YouTube"
        />
        <img
          className="login"
          src={User}
          alt="login-user"
          title="Acessar ou Cadastrar sua conta"
        />
        <p>
          Faça <a>login</a> <br />
          ou <a>Cadastre-se</a>
        </p>
      </LinksAcess>
    </Container>
  );
}

export default HeaderHome;
