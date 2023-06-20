import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getAuthStatus } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const status = useSelector(getAuthStatus);

  return (
    <div>
      {status === 'Success' ? (
        <>
          <span>Find contacts by name</span>
          <input
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
  );
};
