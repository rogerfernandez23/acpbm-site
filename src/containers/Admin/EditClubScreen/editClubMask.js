/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

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

function EditClubMask({ onClose }) {
  const [fileName, setFileName] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [clubs, setClubs] = useState([]);
  const { register, handleSubmit, control } = useForm();

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
      const response = await api.put(`clubs/${dataUser.edit.id}`, formData, {
        validateStatus: () => true
      });
      const { status } = response;
      showMessage(status);
    } catch (err) {
      showMessage();
    }
  };

  const inputUpperCase = event => {
    const caseValue = event.target.value.toUpperCase();

    setInputValue(caseValue);
  };

  useEffect(() => {
    const loadData = async () => {
      const { data: responseClubs } = await api.get('clubs');

      setClubs(responseClubs);
    };

    loadData();
  }, []);

  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Container>
      <ContainerTotal>
        <Text>EDITAR CLUBE</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerItens>
            <Controller
              name="edit"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    options={clubs}
                    getOptionLabel={club => club.club_name}
                    getOptionValue={club => club.id}
                    placeholder="Selecione o clube"
                    styles={{
                      control: provided => ({
                        ...provided,
                        borderRadius: '14px',
                        marginBottom: '20px',
                        border: 'none'
                      })
                    }}
                  />
                );
              }}
            />
            <InputName
              placeholder="Defina o novo nome do Clube"
              type="name"
              maxLength={30}
              {...register('club_name')}
            />
            <InputAbreviate
              type="text"
              maxLength={3}
              placeholder="Nova abreviação"
              {...register('abreviate_name')}
              value={inputValue}
              onChange={inputUpperCase}
            />
            <div className="image">
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
            </div>
          </ContainerItens>
          <Buttons>
            <Cancel onClick={onClose}>CANCELAR</Cancel>
            <Save type="submit" onClick={reload}>
              SALVAR
            </Save>
          </Buttons>
        </form>
      </ContainerTotal>
    </Container>
  );
}

EditClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default EditClubMask;
