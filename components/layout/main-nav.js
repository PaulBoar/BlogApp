import Link from 'next/link';
import styles from './main-nav.module.css'

function MainNav() {
  return (
    <header className={styles.header}>
       <Link href='/'> 
        <a className={styles.logo}>
          <div className={styles.logo}>Blog<span>life</span></div>
        </a>
       </Link> 
      <nav className={styles.nav}>
        <ul className={styles['nav-list']}>
          <li>
             <Link href='/posts'>All Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav> 
    </header>
  );
}

export default MainNav;
