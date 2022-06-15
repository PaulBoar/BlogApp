import Link from 'next/link';
import {useState, useEffect} from 'react'
import styles from './main-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainNav(props) {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (props.user) {
      setIsLogged(props.logged)
    }
  }, [props.user])

  console.log(props.user)
  console.log(isLogged)
  console.log(props.logged)
  console.log('render mainanv')
  console.log('render mainanv')

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
