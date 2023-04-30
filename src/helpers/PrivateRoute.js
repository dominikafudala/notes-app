import React, { useEffect, useState } from 'react';
import UserService from 'services/UserService';
import { Outlet, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const PrivateRoute = ({ element, ...rest }) => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      await UserService.checkCredentials().then((res) => {
        setLoggedIn(res);
        setChecking(false);
      });
    };
    checkAccess();
  }, []);

  if (!checking) return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  return null;
};

export default PrivateRoute;
