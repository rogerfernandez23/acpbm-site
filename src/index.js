import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './hooks/UserContext';
import AppRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </>
);
