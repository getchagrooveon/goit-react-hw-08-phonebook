import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getFilteredContacts, getAuthStatus } from 'redux/selectors';

const ContactsList = () => {
  const status = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <div>
      {status === 'Success' ? (
        <>
          <ContactForm />
          <Filter />
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                <span>{contact.name}</span>
                <span>: {contact.number}</span>
                <button onClick={() => dispatch(deleteContacts(contact.id))}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>You are not authorized to view this page</p>
      )}
    </div>
  );
};

export default ContactsList;
