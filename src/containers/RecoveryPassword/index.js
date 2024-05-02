/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import InputOTP from '../../components/InputOTP';
import { useNavigates } from '../../constants/navigates';
import api from '../../services/api';
import {
  Container,
  ContainerToken,
  ContainerLogin,
  Input,
  Button,
  LabelOne,
  LabelTwo,
  ErrorText
} from './styles';
import showMessage from './swalConfig';

function RecoveryPassword() {
  const { toLogin } = useNavigates();
  const [valueToken, setValueToken] = useState('');

  const refreshToken = value => {
    setValueToken(value);
  };

  const schema = yup.object().shape({
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
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async dataUser => {
    try {
      const { status } = await api.patch(
        '/savepass',
        {
          token: valueToken,
          email: dataUser.email,
          password: dataUser.password
        },
        { validateStatus: () => true }
      );

      showMessage(status);

      if (status === 200) {
        setTimeout(() => {
          toLogin();
        }, 3000);
      }
    } catch (err) {
      showMessage();
    }
  };

  return (
    <Container>
      <ContainerToken>
        <LabelOne>REDEFINIR SENHA</LabelOne>
        <LabelTwo>Insira o código enviado ao seu email:</LabelTwo>
        <InputOTP tokenValue={refreshToken} />
      </ContainerToken>
      <ContainerLogin>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Confirme seu e-mail"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorText>{errors.email?.message}</ErrorText>

          <Input
            type="password"
            placeholder="Defina sua nova senha"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorText>{errors.password?.message}</ErrorText>

          <Input
            type="password"
            placeholder="Confirme sua nova senha"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorText>{errors.confirmPassword?.message}</ErrorText>

          <Button type="submit">CADASTRAR</Button>
        </form>
      </ContainerLogin>
    </Container>
  );
}

export default RecoveryPassword;
