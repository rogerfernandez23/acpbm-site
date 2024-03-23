/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Logo from '../../assets/logo_site.png';
import { useNavigates } from '../../constants/navigates';
import { useUser } from '../../hooks/UserContext';
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
  LabelOneInner,
  LabelTwo,
  ErrorText
} from './styles';
import showMessage from './swalConfig';

function Login() {
  const { toRegister, toUsers, toAdmin, toErrror } = useNavigates();
  const { putUserData } = useUser();

  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required(' '),
    password: yup
      .string()
      .required(' ')
      .min(6, 'A senha deve ter no mínimo, 6 dígitos')
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
      const response = await api.post(
        'login',
        {
          email: dataUser.email,
          password: dataUser.password
        },
        { validateStatus: () => true }
      );

      const { data } = response;
      const { status } = response;

      showMessage(status);

      if (status === 200 || status === 201) {
        setTimeout(() => {
          if (data.admin) {
            toAdmin();
            putUserData(data);
          } else if (!data.club_id) {
            toErrror();
          } else {
            toUsers();
            putUserData(data);
          }
        }, 2000);
      }
    } catch (err) {
      showMessage();
    }
  };

  return (
    <Container>
      <ContainerText>
        <LabelOneInner>O MELHOR DA MAIOR</LabelOneInner>
        <LabelOne>FEDERAÇÃO</LabelOne>
        <LabelTwo>
          Acesse seu perfil e acompanhe notícias, campeonatos e demais
          informações!
        </LabelTwo>
      </ContainerText>
      <ContainerLogin>
        <Image src={Logo} alt="logo-da-federacao" />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Informe seu e-mail"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorText>{errors.email?.message}</ErrorText>

          <Input
            type="password"
            placeholder="Informe sua senha"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorText>{errors.password?.message}</ErrorText>

          <Register>
            Não possui cadastro? <Form onClick={toRegister}>Clique Aqui</Form>
          </Register>
          <Button type="submit">LOGIN</Button>
        </form>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
