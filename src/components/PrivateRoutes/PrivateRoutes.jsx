import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getAuthStatus, getAuthToken } from 'redux/selectors';

const PrivateRoutes = () => {
  const status = useSelector(getAuthStatus);
  const token = useSelector(getAuthToken);

  return status === 'Success' && token ? (
    <div>{<Outlet />}</div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
