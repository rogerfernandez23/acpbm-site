/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import UploadImg from '../../../assets/upload_image.png';
import api from '../../../services/api';
import showMessage from '../../swalConfig';
import {
  Container,
  ContainerTotal,
  ContainerItens,
  Text,
  InputName,
  InputAbreviate,
  LabelImport,
  Buttons,
  Cancel,
  Save
} from './styles';

function CreateClubMask({ onClose }) {
  const [fileName, setFileName] = useState(null);
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState('');

  const onSubmit = async dataUser => {
    const formData = new FormData();

    if (dataUser.club_name) {
      formData.append('club_name', dataUser.club_name);
    }

    if (dataUser.club_user) {
      formData.append('club_user', dataUser.club_user);
    }

    if (dataUser.abreviate_name) {
      formData.append('abreviate_name', dataUser.abreviate_name);
    }

    if (dataUser.file && dataUser.file.length > 0) {
      formData.append('file', dataUser.file[0]);
    }

    try {
      const response = await api.post('clubs', formData, {
        validateStatus: () => true
      });

      const { status } = response;
      showMessage(status);
    } catch (err) {
      showMessage();
    }
  };

  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const inputUpperCase = event => {
    const caseValue = event.target.value.toUpperCase();

    setInputValue(caseValue);
  };

  return (
    <Container>
      <ContainerTotal>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerItens>
            <Text>CRIAR NOVO CLUBE</Text>
            <InputName
              placeholder="Defina o nome do Clube"
              type="name"
              maxLength={30}
              {...register('club_name')}
            />
            <InputName
              placeholder="Nome do Presidente"
              type="name"
              maxLength={30}
              {...register('club_user')}
            />
            <InputAbreviate
              type="text"
              maxLength={3}
              placeholder="Abreviação"
              {...register('abreviate_name')}
              value={inputValue}
              onChange={inputUpperCase}
            />
            <LabelImport>
              {fileName || (
                <>
                  <img src={UploadImg} />
                  Carregar novo escudo
                </>
              )}

              <input
                type="file"
                accept="image/png"
                {...register('file', {
                  onChange: value => setFileName(value.target.files[0].name)
                })}
              />
            </LabelImport>
            <Buttons>
              <Cancel onClick={onClose}>CANCELAR</Cancel>
              <Save type="submit" onClick={reload}>
                SALVAR
              </Save>
            </Buttons>
          </ContainerItens>
        </form>
      </ContainerTotal>
    </Container>
  );
}

CreateClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default CreateClubMask;
