import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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
          type="text"
          id="password"
          value={user.password}
          placeholder="Password (min. 7 symbols)"
          required
        ></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
