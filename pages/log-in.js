import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/dist/client/link.js';
import { auth } from '../firebase-config.js';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import styles from './log-in.module.css';

function LogIn({onIsLogged, onUser}) {
  const [wantRegister, setWantRegister] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [hasError, setHasError] = useState(false)
  const [touched, setTouched] = useState(false)
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [cuser, setUser] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
      setIsLogged(true);
      onIsLogged(true);
      await onUser(user)
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setIsLogged(true);
      onIsLogged(true);
      await onUser(user)
    } catch (error) {
      setHasError(true)
      setTouched(true)
    }
  }, [loginEmail, loginPassword, cuser, onIsLogged, onUser]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [handleLogin]);

  useEffect(() => {
  if (!isLogged) {
     signOut(auth)
  }}, [isLogged])

  const logout =  () => {
     signOut(auth)
    onUser('')
  };

  const blurHandler = () => {
    setTouched(false)
  }

  const inputClasses = hasError && touched ? `${styles.invalid}` : ''

  let logIn = (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type='text'
          placeholder='email...'
          className={inputClasses}
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          onBlur={blurHandler}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='password...'
          className={inputClasses}
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        {hasError && touched && <p>wrong email or password</p>}
        <button className={styles.btn} type='submit'>Login</button>
        <button className={styles.btn} type='button' onClick={() => setWantRegister(true)}>
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
        <input
          type='text'
          placeholder='name...'
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
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
        <button className={styles.btn} type='submit'>Register</button>
        <button className={styles.btn} type='button' onClick={() => setWantRegister(false)}>
          Login
        </button>
      </form>
    </>
  );

  return (
    <div className={styles.container}>
      {!cuser?.email ? (
        <div className={styles.box}>{wantRegister ? register : logIn}</div>
      ) : (
        <div className={styles.welcome}>
          <h2>WELCOME {cuser?.email.split('@', 1)[0]}</h2>
          <div className={styles.actions}>
          <Link href='/'><a>go to main page</a></Link>
          <button className={styles.btn} onClick={logout}>logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogIn;
