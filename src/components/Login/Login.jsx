import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logInUser(user));
    navigate('/contacts', { replace: true });
    setUser({
      email: '',
      password: '',
    });
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
        <label thmlfor="email"></label>
        <TextField
          onChange={handleChange}
          name="email"
          type="text"
          id="outlined-controlled"
          value={user.email}
          label="E-mail"
          autoFocus={true}
          required
        ></TextField>
        <label thmlfor="password"></label>
        <TextField
          onChange={handleChange}
          name="password"
          type="text"
          id="outlined-controlled"
          value={user.password}
          label="Password"
          required
        ></TextField>
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
