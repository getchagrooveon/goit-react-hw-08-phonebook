import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContacts } from 'redux/operations';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', phone: '' });
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
    contact.id = nanoid();
    dispatch(addContacts(newContact));
    setContact({
      name: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmitaddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone number"
          required
          value={contact.phone}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
