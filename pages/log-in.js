import React, {useState, useEffect} from 'react'

import styles from './log-in.module.css'

function LogIn() {
  return (
    <div className={styles.container}>
    <div className={styles.box}>
     <h2>Log in</h2>
     <form>
      <label>Username</label>
      <input type='text' placeholder='name...'/>
      <label>Email</label>
      <input type='text' placeholder='email...'/>
      <label>Password</label>
      <input type='password' placeholder='password...'/>
      <button type='submit'>Log in</button>
     </form>
    </div>
    </div>
  )
}

export default LogIn