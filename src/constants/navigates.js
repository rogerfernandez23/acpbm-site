/* eslint-disable import/prefer-default-export */
import { useNavigate } from 'react-router-dom';

export function useNavigates() {
  const navigate = useNavigate();

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

  return {
    toHome,
    toUsers,
    toAdmin,
    toFrezze,
    toRegister,
    toLogin,
    toErrror
  };
}
