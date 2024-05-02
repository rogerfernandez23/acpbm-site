/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Seta from '../../assets/seta_voltar.png';
import api from '../../services/api';
import ExeVideo from './exevideo';
import {
  Container,
  ContainerVideo,
  ContainerRegister,
  ContainerLogin,
  TextRegister,
  BackScreen,
  ImgBack,
  BackText,
  H1,
  Input,
  Button,
  ErrorText
} from './styles';
import showMessage from './swalConfig';
import Text from './Text';

function Register() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate('/login');
  };

  const toHome = () => {
    navigate('/');
  };

  const schema = yup.object().shape({
    name: yup.string().required(' ').min(8, 'Insira nome e sobrenome'),
    email: yup.string().email('Digite um e-mail válido').required(' '),
    password: yup.string().required(' ').min(6, 'Deve ter mais de 6 dígitos'),
    confirmPassword: yup
      .string()
      .required(' ')
      .oneOf([yup.ref('password')], 'As senhas não são iguais')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async dataUser => {
    try {
      const response = await api.post(
        'register',
        {
          name: dataUser.name,
          email: dataUser.email,
          password: dataUser.password
        },
        { validateStatus: () => true }
      );

      const { status } = response;

      showMessage(status);

      reset();

      if (!status === 409) {
        setTimeout(toHome, 3000);
      }
    } catch (err) {
      showMessage();
    }
  };

  // VIDEO SHOWN OR NOT

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <ContainerVideo width={window.innerWidth}>
        {windowWidth >= 860 ? <ExeVideo /> : <div />}
        <TextRegister>
          JUNTE-SE AS MAIORES COMPETIÇÕES DO CARTOLA FC SOLICITANDO UMA
          AFILIAÇÃO!
        </TextRegister>
        <Text />
      </ContainerVideo>
      <ContainerRegister width={window.innerWidth}>
        <BackScreen onClick={toLogin}>
          <ImgBack src={Seta} />
          <BackText>TELA INICIAL</BackText>
        </BackScreen>

        <H1>CRIE SUA CONTA</H1>
        <ContainerLogin noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="name"
            placeholder="Seu nome e sobrenome"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorText>{errors.name?.message}</ErrorText>

          <Input
            type="email"
            placeholder="Seu e-mail principal"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorText>{errors.email?.message}</ErrorText>

          <Input
            type="password"
            placeholder="Crie sua senha de acesso"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorText>{errors.password?.message}</ErrorText>

          <Input
            type="password"
            placeholder="Confirme sua senha de acesso"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorText>{errors.confirmPassword?.message}</ErrorText>

          <Button type="submit">CADASTRE-SE</Button>
        </ContainerLogin>
      </ContainerRegister>
    </Container>
  );
}

export default Register;
