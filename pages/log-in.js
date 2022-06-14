import React, { useState, useEffect } from 'react';
import { auth } from '../firebase-config.js';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import styles from './log-in.module.css';

function LogIn(props) {
  const [wantRegister, setWantRegister] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('first');
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerName,
      );
      setIsLogged(true);
      props.onIsLogged(true);
      props.onLoggedName(registerName)
      console.log(user.email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('lol');
    try {
      const user = signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      setIsLogged(true);
      props.onIsLogged(true);
      console.log(user.email);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth)
    setIsLogged(props.logout);
    props.onIsLogged(false);
    props.onIsLogged(isLogged);
  };

  let logIn = (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type='text'
          placeholder='email...'
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='password...'
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        <button type='button' onClick={() => setWantRegister(true)}>
          Register
        </button>
      </form>
    </>
  );

  let register = (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleRegister}>
        <label>Username</label>
        <input type='text' placeholder='name...' value={registerName} onChange={e => setRegisterName(e.target.value)} />
        <label>Email</label>
        <input
          type='text'
          placeholder='email...'
          vlaue={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='password...'
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
        <button type='button' onClick={() => setWantRegister(false)}>
          Login
        </button>
      </form>
    </>
  );

  return (
    <div className={styles.container}>
      {!isLogged ? (
        <div className={styles.box}>{wantRegister ? register : logIn}</div>
      ) : (
        <div>
          WELCOME {user?.email}
          <button onClick={logout}>logout</button>
        </div>
      )}
    </div>
  );
}

export default LogIn;
