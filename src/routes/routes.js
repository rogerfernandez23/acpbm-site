/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import paths from '../constants/paths';
import Admin from '../containers/Admin';
import ErrorLogin from '../containers/ErrorLogin';
import ForgotPassword from '../containers/ForgotPassword';
import Home from '../containers/Home';
import Login from '../containers/Login';
import LogoutScreen from '../containers/LogoutScreen';
import NoticeRead from '../containers/NoticeRead';
import RecoveryPassword from '../containers/RecoveryPassword';
import Register from '../containers/Register';
import ScreenAlert from '../containers/ScreenAlert';
import Users from '../containers/Users';
import RoutePrivate from './privateRoutes';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* ROUTES FREE */}

        <Route path={paths.Error} element={<ErrorLogin />} />
        <Route exact path={paths.Home} element={<Home />} />
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.ForgotPass} element={<ForgotPassword />} />
        <Route path={paths.RecoveryPass} element={<RecoveryPassword />} />
        <Route path={paths.Register} element={<Register />} />
        <Route path={paths.Logout} element={<LogoutScreen />} />
        <Route path={paths.Alert} element={<ScreenAlert />} />
        <Route path={paths.Notice} element={<NoticeRead />} />

        {/* ROUTES LOGS */}

        <Route
          path={paths.Users}
          element={
            <RoutePrivate isUser>
              <Users />
            </RoutePrivate>
          }
          isUser
        />
        <Route
          path={paths.Admin}
          element={
            <RoutePrivate isAdmin>
              <Admin />
            </RoutePrivate>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
