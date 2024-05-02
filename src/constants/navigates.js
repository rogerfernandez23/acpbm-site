/* eslint-disable import/prefer-default-export */
import { useNavigate } from 'react-router-dom';

import { useUser } from '../hooks/UserContext';

export function useNavigates() {
  const navigate = useNavigate();
  const { logout } = useUser();

  const toHome = () => {
    navigate('/');
  };

  const toUsers = () => {
    navigate('/usuario');
  };

  const toRegister = () => {
    navigate('/cadastro');
  };

  const toLogin = () => {
    navigate('/login');
  };

  const toAdmin = () => {
    navigate('/adm');
  };

  const toFrezze = () => {
    navigate('/teste');
  };

  const toErrror = () => {
    navigate('/error');
  };

  const toLogout = () => {
    logout();
    window.location.reload();
  };

  const toForgot = () => {
    navigate('/recuperar-senha');
  };

  return {
    toHome,
    toUsers,
    toAdmin,
    toFrezze,
    toRegister,
    toLogin,
    toErrror,
    toLogout,
    toForgot
  };
}
