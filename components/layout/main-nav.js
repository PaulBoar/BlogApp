import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './main-nav.module.css';
import Burger from './burger';
import BurgerMenu from './burger-menu';

function MainNav(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  useEffect(() => {
    if (props.user) {
      setIsLogged(props.logged);
    }
  }, [props.user, props.logged]);

  const handleLogout = () => {
    props.onLogout();
  };

  const handleBurgerMenu = () => {
    console.log('lewp');
    setShowBurgerMenu((prev) => !prev);
  };

  const handleClose = () => {
    console.log('lewp');
    setShowBurgerMenu(false);
  };

  const headerStyles = !navbar
    ? `${styles.header}`
    : `${styles.header} ${styles.scrolled}`;

  return (
    <header className={headerStyles}>
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
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            {!props.logged ? (
              <Link href='/log-in'>
                <a>Login</a>
              </Link>
            ) : (
              <Link href='/'>
                <a onClick={handleLogout}>Logout</a>
              </Link>
            )}
          </li>
        </ul>
        <Burger
          className={styles.burger}
          onShowBurgerMenu={handleBurgerMenu}
          isOpen={showBurgerMenu}
        />
        <BurgerMenu
          isOpen={showBurgerMenu}
          logged={props.logged}
          onClose={handleClose}
        />
      </nav>
    </header>
  );
}

export default MainNav;
