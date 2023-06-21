import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthStatus, getAuthToken } from 'redux/selectors';

const PublicRoutes = () => {
  const status = useSelector(getAuthStatus);
  const token = useSelector(getAuthToken);

  return status !== 'Success' && !token ? (
    <div>{<Outlet />}</div>
  ) : (
    <Navigate to="/contacts" />
  );
};

export default PublicRoutes;
