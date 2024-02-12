/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import React, { useContext, createContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async dataUser => {
    setUserData(dataUser);

    await localStorage.setItem('useracpbm:data', JSON.stringify(dataUser));
  };

  const logout = async () => {
    await localStorage.removeItem('useracpbm:data');
  };

  useEffect(() => {
    const userLoad = async () => {
      const dataInfo = await localStorage.getItem('useracpbm:data');

      if (dataInfo) {
        setUserData(JSON.parse(dataInfo));
      }
    };

    userLoad();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('error context api');
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node
};
