import React, { useState } from 'react';

import CreateClubImg from '../../assets/create_club.png';
import DeleteClubImg from '../../assets/delete_club.png';
import EditClubImg from '../../assets/edit_club.png';
import ManagerClubImg from '../../assets/manager_club.png';
import HeaderUser from '../../components/HeaderUser';
import CreateClubMask from './CreateClubScreen/createClubMask';
import DeleteClubMask from './DeleteClubScreen/deleteClubMask';
import EditClubMask from './EditClubScreen/editClubMask';
import ManagerClubMask from './ManagerClubScreen/managerClubMask';
import {
  Container,
  ContainerManager,
  Options,
  ImgManager,
  ManageButton,
  Text
} from './styles';

function Admin() {
  const [showManagerMask, setShowManagerMask] = useState(false);
  const [showCreateMask, setShowCreateMask] = useState(false);
  const [showEditMask, setShowEditMask] = useState(false);
  const [showDeleteMask, setShowDeleteMask] = useState(false);

  const closeMasks = () => {
    setShowCreateMask(false);
    setShowEditMask(false);
    setShowDeleteMask(false);
    setShowManagerMask(false);
  };

  return (
    <Container>
      <HeaderUser style={{ backgroundColor: '#B22323' }} />
      <Options>
        <ContainerManager>
          <ImgManager src={ManagerClubImg} />
          <ManageButton onClick={() => setShowManagerMask(true)}>
            GERENCIAR USUÁRIOS
          </ManageButton>
        </ContainerManager>
        <ContainerManager>
          <ImgManager src={CreateClubImg} />
          <ManageButton onClick={() => setShowCreateMask(true)}>
            CRIAR NOVO CLUBE
          </ManageButton>
        </ContainerManager>
        <ContainerManager>
          <ImgManager src={EditClubImg} />
          <ManageButton onClick={() => setShowEditMask(true)}>
            EDITAR CLUBE
          </ManageButton>
        </ContainerManager>
        <ContainerManager>
          <ImgManager src={DeleteClubImg} />
          <ManageButton onClick={() => setShowDeleteMask(true)}>
            DELETAR CLUBE
          </ManageButton>
        </ContainerManager>
      </Options>
      <Text>Em breve, mais funcionalidades</Text>
      {showCreateMask && <CreateClubMask onClose={closeMasks} />}
      {showEditMask && <EditClubMask onClose={closeMasks} />}
      {showDeleteMask && <DeleteClubMask onClose={closeMasks} />}
      {showManagerMask && <ManagerClubMask onClose={closeMasks} />}
    </Container>
  );
}

export default Admin;
