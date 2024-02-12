/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import paths from '../constants/paths';
import Admin from '../containers/Admin';
import ErrorLogin from '../containers/ErrorLogin';
import Home from '../containers/Home';
import Login from '../containers/Login';
import LogoutScreen from '../containers/LogoutScreen';
import NoticeRead from '../containers/NoticeRead';
import Register from '../containers/Register';
import ScreenAlert from '../containers/ScreenAlert';
import Users from '../containers/Users';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path={paths.Home} element={<Home />} />
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Register} element={<Register />} />
        <Route path={paths.Logout} element={<LogoutScreen />} />
        <Route path={paths.Alert} element={<ScreenAlert />} />
        <Route path={paths.Users} element={<Users />} />
        <Route path={paths.Error} element={<ErrorLogin />} />
        <Route path={paths.Admin} element={<Admin />} />
        <Route path={paths.Notice} element={<NoticeRead />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
