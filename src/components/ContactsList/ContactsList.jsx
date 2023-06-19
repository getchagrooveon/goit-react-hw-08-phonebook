import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getFilteredContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);
  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>: {contact.phone}</span>
            <button onClick={() => dispatch(deleteContacts(contact.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
