import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';
import { getUserInfo } from 'redux/selectors';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userinfo = useSelector(getUserInfo);

  const handleLogOut = async () => {
    await dispatch(logOutUser()).unwrap();
  };

  return (
    <div>
      <p className="userinfo">{userinfo.email}</p>
      <Button variant="contained" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
