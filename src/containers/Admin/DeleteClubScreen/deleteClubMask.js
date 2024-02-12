/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React from 'react';

import {
  Container,
  ContainerTotal,
  ContainerItens,
  Text,
  SelectUser,
  Buttons,
  Cancel,
  Save
} from './styles';

function DeleteClubMask({ onClose }) {
  return (
    <Container>
      <ContainerTotal>
        <ContainerItens>
          <Text>DELETAR CLUBE</Text>
          <SelectUser placeholder="Selecione o usuário" />
        </ContainerItens>
        <Buttons>
          <Cancel onClick={onClose}>CANCELAR</Cancel>
          <Save>SALVAR</Save>
        </Buttons>
      </ContainerTotal>
    </Container>
  );
}

DeleteClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default DeleteClubMask;
