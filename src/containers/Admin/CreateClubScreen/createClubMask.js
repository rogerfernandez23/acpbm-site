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

function CreateClubMask({ onClose }) {
  const [inputValue, setInputValue] = useState('');

  const inputUpperCase = event => {
    const caseValue = event.target.value.toUpperCase();

    setInputValue(caseValue);
  };

  return (
    <Container>
      <ContainerTotal>
        <ContainerItens>
          <Text>CRIAR NOVO CLUBE</Text>
          <SelectUser placeholder="Selecione o usuário" />
          <InputName placeholder="Defina o novo nome" />
          <InputAbreviate
            type="text"
            value={inputValue}
            onChange={inputUpperCase}
            maxLength={3}
            placeholder="Abreviação"
          />
          <ImageImport placeholder="Carregar novo escudo" />
        </ContainerItens>
        <Buttons>
          <Cancel onClick={onClose}>CANCELAR</Cancel>
          <Save>SALVAR</Save>
        </Buttons>
      </ContainerTotal>
    </Container>
  );
}

CreateClubMask.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default CreateClubMask;
