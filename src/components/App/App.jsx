import ContactsList from 'components/ContactsList/ContactsList';
import { getAuthStatus } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, refreshUser } from 'redux/operations';
import Registration from 'components/Registration/Registration';
import Login from 'components/Login/Login';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigate, Routes, Route, NavLink } from 'react-router-dom';
import PublicRoutes from 'components/PublicRoutes/PublicRoutes';
import PrivateRoutes from 'components/PrivateRoutes/PrivateRoutes';

export const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(getAuthStatus);

  useEffect(() => {
    if (status === 'Success') {
      dispatch(refreshUser());
      dispatch(fetchContacts());
    }
  }, [status, dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <nav>
        {status === 'Success' ? (
          <>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink className="navlink" to={'/register'}>
              register
            </NavLink>
            <NavLink className="navlink" to={'/login'}>
              login
            </NavLink>
          </>
        )}
      </nav>
      {status === 'Loading' && <b>Loading...</b>}
      <div>
        <Routes>
          <Route path="/" element={<Navigate to={'/contacts'} />} />
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/contacts" element={<ContactsList />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
