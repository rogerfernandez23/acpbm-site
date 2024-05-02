/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Logo from '../../assets/logo_site.png';
import { useNavigates } from '../../constants/navigates';
import api from '../../services/api';
import {
  Container,
  ContainerText,
  ContainerLogin,
  Input,
  Register,
  Form,
  Image,
  Button,
  LabelOne,
  LabelTwo,
  ErrorText
} from './styles';
import showMessage from './swalConfig';

function ForgotPassword() {
  const { toLogin, toHome } = useNavigates();

  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required(' ')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async dataUser => {
    try {
      const { status } = await api.post(
        '/recovery',
        {
          email: dataUser.email
        },
        { validateStatus: () => true }
      );

      showMessage(status);

      if (status === 200) {
        setTimeout(() => {
          toHome();
        }, 3000);
      }
    } catch (err) {
      showMessage();
    }
  };

  return (
    <Container>
      <ContainerText>
        <LabelOne>ESQUECEU SUA SENHA?</LabelOne>
        <LabelTwo>Siga as instruções que enviaremos ao seu e-mail</LabelTwo>
      </ContainerText>

      <ContainerLogin>
        <Image src={Logo} alt="logo-da-federacao" />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Informe seu e-mail de cadastro"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorText>{errors.email?.message}</ErrorText>

          <Button type="submit">ENVIAR EMAIL</Button>
          <Register>
            Voltar a tela de <Form onClick={toLogin}>Login</Form>
          </Register>
        </form>
      </ContainerLogin>
    </Container>
  );
}

export default ForgotPassword;
