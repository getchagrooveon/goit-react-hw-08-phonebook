import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/operations';

const Registration = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(createUser(user)).unwrap();
      // navigate(/ContactsList, {replace: true})
      setUser({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = event => {
    setUser(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label thmlfor="name"></label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          id="name"
          value={user.name}
          placeholder="Name"
          required
        ></input>
        <label thmlfor="email"></label>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          id="email"
          value={user.email}
          placeholder="Email"
          required
        ></input>
        <label thmlfor="password"></label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          id="password"
          value={user.password}
          placeholder="Password (min. 7 symbols)"
          required
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
