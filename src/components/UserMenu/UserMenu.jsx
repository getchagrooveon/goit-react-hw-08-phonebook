import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';
import { getUserInfo } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userinfo = useSelector(getUserInfo);

  const handleLogOut = async () => {
    await dispatch(logOutUser()).unwrap();
  };

  return (
    <div>
      <p>{userinfo.email}</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default UserMenu;
