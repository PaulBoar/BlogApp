import React, { useState, useEffect } from 'react';
import { auth } from '../firebase-config.env.local';

import styles from './log-in.module.css';

function LogIn() {
  const [wantRegister, setWantRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
console.log(auth)
  // const register = async () => {
  //  try {

  //  } catch (error) {
  //   console.log(error)
  //  }
  // };

  const login = async () => {};

  const logout = async () => {};

  const logIn = !wantRegister ? (
    <>
      <h2>Log in</h2>
      <form>
        <label>Email</label>
        <input type='text' placeholder='email...' />
        <label>Password</label>
        <input type='password' placeholder='password...' />
        <button type='submit'>Login</button>
        <button type='button' onClick={() => setWantRegister(true)}>
          Sign up
        </button>
      </form>{' '}
    </>
  ) : (
    <>
      {' '}
      <h2>Sign up</h2>
      <form>
        <label>Username</label>
        <input type='text' placeholder='name...' />
        <label>Email</label>
        <input type='text' placeholder='email...' />
        <label>Password</label>
        <input type='password' placeholder='password...' />
        <button type='submit'>Sign up</button>
        <button type='button' onClick={() => setWantRegister(false)}>
          Log in
        </button>
      </form>{' '}
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.box}>{logIn}</div>
    </div>
  );
}

export default LogIn;
