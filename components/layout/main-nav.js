import Link from 'next/link';
import styles from './main-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <div className={styles.logo}>
            Blog<span>Life</span>
          </div>
        </a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles['nav-list']}>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/log-in'>Log in</Link>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.burger} icon={faBars} />
      </nav>
    </header>
  );
}

export default MainNav;
