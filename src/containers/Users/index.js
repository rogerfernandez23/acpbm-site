import React, { useState } from 'react';

import LogoClub from '../../assets/image_icon.png';
import HeaderUser from '../../components/HeaderUser';
import EditClubMask from './Mask/editClubMask';
import {
  Container,
  EditClub,
  Image,
  NameClub,
  EditButton,
  Text
} from './styles';

function Users() {
  const [showEditMask, setShowEditMask] = useState(false);

  const closeEditMask = () => {
    setShowEditMask(false);
  };

  return (
    <Container>
      <HeaderUser />
      <EditClub>
        <Image src={LogoClub} />
        <NameClub>Nome do Clube</NameClub>
        <EditButton onClick={() => setShowEditMask(true)}>EDITAR</EditButton>
      </EditClub>
      <Text>Em breve, mais funcionalidades</Text>
      {showEditMask && <EditClubMask onClose={closeEditMask} />}
    </Container>
  );
}

export default Users;
