import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Registration = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(createUser(user)).unwrap();
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
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label thmlfor="name"></label>
        <TextField
          onChange={handleChange}
          name="name"
          type="text"
          id="outlined-controlled"
          value={user.name}
          label="Name"
          required
          autoFocus={true}
        ></TextField>
        <label thmlfor="email"></label>
        <TextField
          onChange={handleChange}
          name="email"
          type="text"
          id="outlined-controlled"
          value={user.email}
          label="E-mail"
          required
        ></TextField>
        <label thmlfor="password"></label>
        <TextField
          onChange={handleChange}
          name="password"
          type="password"
          id="outlined-controlled"
          value={user.password}
          label="Password (min. 7 symbols)"
          required
        ></TextField>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registration;
