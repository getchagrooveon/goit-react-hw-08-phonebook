import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const contactList = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    setContact(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitaddContact = event => {
    event.preventDefault();
    const newContact = contact;
    if (contactList.find(contact => contact.name === newContact.name)) {
      alert('This contact has already been added');
      return;
    }
    dispatch(addContacts(newContact));
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmitaddContact}>
        <label>
          <TextField
            id="outlined-controlled"
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contact.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <TextField
            id="outlined-controlled"
            label="Phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contact.number}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
};
