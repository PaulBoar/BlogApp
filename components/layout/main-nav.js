import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './main-nav.module.css';
import Burger from './burger';
import BurgerMenu from './burger-menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainNav(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  // useEffect(() => {
  //   setShowBurgerMenu(false)
  // }, [])

  useEffect(() => {
    if (props.user) {
      setIsLogged(props.logged);
    }
  }, [props.user]);

  const handleLogout = () => {
    props.onLogout();
  };

  const handleBurgerMenu = () => {
    console.log('lewp')
    setShowBurgerMenu(prev => !prev)
  }

  const handleClose = () => {
    console.log('lewp')
    setShowBurgerMenu(false)
  }

 
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <div className={styles.logo}>
            Mind<span>works</span>
          </div>
        </a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles['nav-list']}>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            {!props.logged ? (
              <Link href='/log-in'>Login</Link>
            ) : (
              <Link href='/'><a onClick={handleLogout}>
                Logout
              </a> </Link>
            )}
          </li>
        </ul>
        <Burger className={styles.burger} onShowBurgerMenu={handleBurgerMenu}isOpen={showBurgerMenu}/>
        <BurgerMenu isOpen={showBurgerMenu} logged={props.logged} onClose={handleClose}/>
      </nav>
    </header>
  );
}

export default MainNav;
