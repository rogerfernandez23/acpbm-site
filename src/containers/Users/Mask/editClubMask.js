/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Container,
  ContainerItens,
  EditClub,
  Text,
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
      <ContainerItens>
        <Text>EDITAR SEU CLUBE</Text>
        <EditClub>
          <InputName placeholder="Defina o novo nome" />
          <InputAbreviate
            type="text"
            value={inputValue}
            onChange={inputUpperCase}
            maxLength={3}
            placeholder="Abreviação"
          />
        </EditClub>
        <ImageImport placeholder="Carregar novo escudo" />
        <Buttons>
          <Cancel onClick={onClose}>CANCELAR</Cancel>
          <Save>SALVAR</Save>
        </Buttons>
      </ContainerItens>
    </Container>
  );
}

EditClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default EditClubMask;
