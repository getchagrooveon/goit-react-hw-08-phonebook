import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import {
  getFilteredContacts,
  getAuthStatus,
  getIsLoading,
} from 'redux/selectors';
import Button from '@mui/material/Button';

const ContactsList = () => {
  const status = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <div>
        {status === 'Success' ? (
          <>
            <ContactForm />
            <Filter />
            {isLoading && <b>Loading...</b>}
            <ul>
              {filteredContacts.map(contact => (
                <li key={contact.id}>
                  <span>{contact.name}</span>
                  <span>: {contact.number}</span>
                  <Button
                    variant="contained"
                    onClick={() => dispatch(deleteContacts(contact.id))}
                  >
                    delete
                  </Button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>You are not authorized to view this page</p>
        )}
      </div>
    </>
  );
};

export default ContactsList;
