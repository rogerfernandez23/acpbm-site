/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import HeaderUser from '../../components/HeaderUser';
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api';
import EditClubMask from './EditClubUserMask/editClubMask';
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
  const [clubs, setClubs] = useState([]);
  const { userData } = useUser();

  const closeEditMask = () => {
    setShowEditMask(false);
  };

  useEffect(() => {
    const userInfos = async () => {
      const { data } = await api.get('clubs');

      const clubId = userData.club_id;
      const clubData = data.filter(club => club.id === clubId);

      setClubs(clubData);
    };

    userInfos();
  }, [userData.club_id]);

  return (
    <Container>
      <HeaderUser />
      <EditClub>
        {clubs &&
          clubs.map(club => (
            <>
              <div className="box-image">
                <Image key={club.id} src={club.url} />
              </div>
              <div className="box-name">
                <NameClub>{club.club_name}</NameClub>
              </div>
            </>
          ))}
        <EditButton onClick={() => setShowEditMask(true)}>EDITAR</EditButton>
      </EditClub>
      <Text>Em breve, mais funcionalidades</Text>
      {showEditMask && <EditClubMask clubs={clubs} onClose={closeEditMask} />}
    </Container>
  );
}

export default Users;
