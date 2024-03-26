/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import UploadImg from '../../../assets/upload_image.png';
import { useUser } from '../../../hooks/UserContext';
import api from '../../../services/api';
import showMessage from '../../swalConfig';
import {
  Container,
  ContainerItens,
  EditClub,
  Text,
  InputName,
  InputAbreviate,
  LabelImport,
  Buttons,
  Cancel,
  Save
} from './styles';

function EditClubMask({ onClose, clubs }) {
  const [fileName, setFileName] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const { userData } = useUser();
  const { register, handleSubmit } = useForm();

  const onSubmit = async dataUser => {
    const formData = new FormData();

    if (dataUser.club_name) {
      formData.append('club_name', dataUser.club_name);
    }

    if (dataUser.abreviate_name) {
      formData.append('abreviate_name', dataUser.abreviate_name);
    }

    if (dataUser.file && dataUser.file.length > 0) {
      formData.append('file', dataUser.file[0]);
    }

    try {
      const response = await api.put(`clubs/${userData.club_id}`, formData, {
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
      <ContainerItens>
        <Text>EDITAR SEU CLUBE</Text>
        <p className="sub">Você também pode editar apenas um dos campos</p>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <EditClub>
            <InputName
              type="name"
              maxLength={30}
              placeholder={clubs[0].club_name}
              {...register('club_name')}
            />
            <InputAbreviate
              type="text"
              maxLength={3}
              placeholder={clubs[0].abreviate_name}
              {...register('abreviate_name')}
              value={inputValue}
              onChange={inputUpperCase}
            />
          </EditClub>
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
        </form>
      </ContainerItens>
    </Container>
  );
}

EditClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

EditClubMask.propTypes = {
  clubs: PropTypes.func.isRequired
};

export default EditClubMask;
