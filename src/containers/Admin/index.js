import React, { useState } from 'react';

import CreateClubImg from '../../assets/create_club.png';
import DeleteClubImg from '../../assets/delete_club.png';
import EditClubImg from '../../assets/edit_club.png';
import HeaderUser from '../../components/HeaderUser';
import CreateClubMask from './CreateClubScreen/createClubMask';
import DeleteClubMask from './DeleteClubScreen/deleteClubMask';
import EditClubMask from './EditClubScreen/editClubMask';
import {
  Container,
  Options,
  Create,
  ImgCreate,
  CreateButton,
  Edit,
  ImgEdit,
  EditButton,
  Delete,
  ImgDelete,
  DeleteButton
} from './styles';

function Admin() {
  const [showCreateMask, setShowCreateMask] = useState(false);
  const [showEditMask, setShowEditMask] = useState(false);
  const [showDeleteMask, setShowDeleteMask] = useState(false);

  const closeMasks = () => {
    setShowCreateMask(false);
    setShowEditMask(false);
    setShowDeleteMask(false);
  };

  return (
    <Container>
      <HeaderUser style={{ backgroundColor: '#B22323' }} />
      <Options>
        <Create>
          <ImgCreate src={CreateClubImg} />
          <CreateButton onClick={() => setShowCreateMask(true)}>
            CRIAR NOVO CLUBE
          </CreateButton>
        </Create>
        <Edit>
          <ImgEdit src={EditClubImg} />
          <EditButton onClick={() => setShowEditMask(true)}>
            EDITAR CLUBE
          </EditButton>
        </Edit>
        <Delete>
          <ImgDelete src={DeleteClubImg} />
          <DeleteButton onClick={() => setShowDeleteMask(true)}>
            DELETAR CLUBE
          </DeleteButton>
        </Delete>
      </Options>

      {showCreateMask && <CreateClubMask onClose={closeMasks} />}
      {showEditMask && <EditClubMask onClose={closeMasks} />}
      {showDeleteMask && <DeleteClubMask onClose={closeMasks} />}
    </Container>
  );
}

export default Admin;
