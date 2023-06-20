import ContactsList from 'components/ContactsList/ContactsList';
import { getIsLoading, getError, getAuthStatus } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, refreshUser } from 'redux/operations';
import Registration from 'components/Registration/Registration';
import Login from 'components/Login/Login';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigate, Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
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
            <Link to={'/contacts'}> contacts</Link>
          </>
        ) : (
          <>
            <Link to={'/register'}> register</Link>
            <Link to={'/login'}> login</Link>
          </>
        )}
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to={'/contacts'} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<ContactsList />} />
        </Routes>

        {isLoading && !error && status && <b>Loading...</b>}
      </div>
    </>
  );
};
