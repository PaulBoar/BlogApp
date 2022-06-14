import Link from 'next/link';
import {useState, useEffect} from 'react'
import styles from './main-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainNav(props) {
  const [isLogged, setIsLogged] = useState(false)
  console.log(props.logged)
  useEffect(() => {
    setIsLogged(props.logged)
  }, [])
  console.log(isLogged)
  console.log('render mainanv')
console.log(props.name)

const handleLogout = () => {
  props.onLogout()
}
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
            {!props.logged ? <Link href='/log-in'>Login</Link> : <a href='/' onClick={handleLogout}>Logout</a> }
          </li>
        </ul>
        <FontAwesomeIcon className={styles.burger} icon={faBars} />
      </nav>
    </header>
  );
}

export default MainNav;
