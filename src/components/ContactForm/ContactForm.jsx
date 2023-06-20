import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';

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
    <form onSubmit={handleSubmitaddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone number"
          required
          value={contact.number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
