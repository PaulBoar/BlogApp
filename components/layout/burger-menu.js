import Link from 'next/link';
import React from 'react';
import styles from './burger-menu.module.css';

function BurgerMenu({ logged, isOpen, onClose }) {
  const closeBurgerMenu = () => {
   onClose()
  }
  console.log('deploy work plz')
  return (
    <nav
      className={styles['burger-menu']}
      style={
        isOpen
          ? { transform: 'translateX(0)' }
          : { transform: 'translateX(-100%)' }
      }
    >
      <Link href='/'>
        <a onClick={closeBurgerMenu}>Home</a>
      </Link>
      <Link href='/about'>
        <a onClick={closeBurgerMenu}>About</a>
      </Link>
      <Link href='/contact'>
        <a onClick={closeBurgerMenu}>Contact</a>
      </Link>
      {!logged ? (
        <Link href='/log-in'>
          <a onClick={closeBurgerMenu}>Login</a>
        </Link>
      ) : (
        <Link href='/'>
          <a onClick={closeBurgerMenu}>Logout</a>
        </Link>
      )}
    </nav>
  );
}

export default BurgerMenu;
