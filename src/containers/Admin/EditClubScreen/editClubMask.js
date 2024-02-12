/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Container,
  ContainerTotal,
  ContainerItens,
  Text,
  SelectUser,
  InputName,
  InputAbreviate,
  ImageImport,
  Buttons,
  Cancel,
  Save
} from './styles';

function EditClubMask({ onClose }) {
  const [inputValue, setInputValue] = useState('');

  const inputUpperCase = event => {
    const caseValue = event.target.value.toUpperCase();

    setInputValue(caseValue);
  };

  return (
    <Container>
      <ContainerTotal>
        <ContainerItens>
          <Text>EDITAR CLUBE</Text>
          <SelectUser placeholder="Trocar usuário" />
          <InputName placeholder="Alterar nome da equipe" />
          <InputAbreviate
            type="text"
            value={inputValue}
            onChange={inputUpperCase}
            maxLength={3}
            placeholder="Alterar abreviação"
          />
          <ImageImport placeholder="Alterar escudo" />
        </ContainerItens>
        <Buttons>
          <Cancel onClick={onClose}>CANCELAR</Cancel>
          <Save>SALVAR</Save>
        </Buttons>
      </ContainerTotal>
    </Container>
  );
}

EditClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default EditClubMask;
