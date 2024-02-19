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

function ManagerClubMask({ onClose }) {
  const [clubs, setClubs] = useState([]);
  const [users, setUsers] = useState([]);
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    const loadData = async () => {
      const { data: responseClubs } = await api.get('clubs');
      const { data: responseUsers } = await api.get('users');

      setClubs(responseClubs);
      setUsers(responseUsers);
    };

    loadData();
  }, []);

  const onSubmit = async dataUser => {
    const formData = new FormData();

    formData.append('club_id', dataUser.club.id);

    try {
      const response = await api.put(`/club/${dataUser.user.id}`, formData, {
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

  return (
    <Container>
      <ContainerTotal>
        <ContainerItens>
          <Text>GERENCIAR USUÁRIO</Text>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="club"
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
            <Controller
              name="user"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    options={users}
                    getOptionLabel={user => user.name}
                    getOptionValue={user => user.id}
                    placeholder="Defina o usuário deste clube"
                    styles={{
                      control: provided => ({
                        ...provided,
                        borderRadius: '14px',
                        border: 'none'
                      })
                    }}
                  />
                );
              }}
            />
            <Buttons>
              <Cancel type="button" onClick={onClose}>
                CANCELAR
              </Cancel>
              <Save type="submit" onClick={reload}>
                SALVAR
              </Save>
            </Buttons>
          </form>
        </ContainerItens>
      </ContainerTotal>
    </Container>
  );
}

ManagerClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ManagerClubMask;
