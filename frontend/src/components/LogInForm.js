import React, { useState, useContext } from 'react';
import { Nav } from './Nav';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { Message } from './Message';

export const LogInForm = () => {
  const { handleLoggedIn } = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const [userId, setUserId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    // Make a POST request to the server to check if the user credentials are valid
    fetch('https://musician.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          console.log('User login successful!');
        } else {
          setIsErrorMessage(true);
          console.error('User login failed:', response.status);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        setUserId(data.userId);
        handleLoggedIn(data.userId, data.email);
        return data;
      })
      .catch(error => {
        console.error('Error logging in user:', error);
      });
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button type='submit'>Log In</button>
        {isErrorMessage && (
          <Message
            className='message-error'
            text={'Please check your email and password'}
          />
        )}
      </form>
      {userId && <Navigate to='/user/home' replace={true} />}
    </>
  );
};
