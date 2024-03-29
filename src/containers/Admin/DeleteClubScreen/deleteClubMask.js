/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import api from '../../../services/api';
import showMessage from '../../swalConfig';
import {
  Container,
  ContainerTotal,
  ContainerItens,
  Text,
  Buttons,
  Cancel,
  Save
} from './styles';

function DeleteClubMask({ onClose }) {
  const [clubs, setClubs] = useState([]);
  const { handleSubmit, control } = useForm();

  const onSubmit = async dataUser => {
    try {
      const response = await api.delete(`clubs/${dataUser.delete.id}`, {
        validateStatus: () => true
      });

      const { status } = response;
      showMessage(status);
    } catch (err) {
      showMessage();
    }
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
        <Text>DELETAR CLUBE</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerItens>
            <Controller
              name="delete"
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

DeleteClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default DeleteClubMask;
