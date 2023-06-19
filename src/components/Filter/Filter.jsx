import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(setFilter(event.target.value))}
        value={filter}
      />
    </div>
  );
};
