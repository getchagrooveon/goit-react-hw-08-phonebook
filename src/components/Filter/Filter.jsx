import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getAuthStatus } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const status = useSelector(getAuthStatus);

  return (
    <Container maxWidth="sm">
      <div>
        {status === 'Success' ? (
          <>
            <TextField
              id="outlined-controlled"
              label="Filter contacts by name"
              type="text"
              name="filter"
              onChange={event => dispatch(setFilter(event.target.value))}
              value={filter}
            />
          </>
        ) : (
          <p>You are not authorized to view this page</p>
        )}
      </div>
    </Container>
  );
};
