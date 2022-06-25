import { Fragment } from 'react';
import MainNav from './main-nav'

import styles from './layout.module.css'

function Layout(props) {

  const handleLogout = () => {
    props.onLogout()
  }
  
  return (
    <div className={styles.container}>
     <MainNav logged={props.isLogged} user={props.user} onLogout={handleLogout}/>
     <main>{props.children}</main>

     <footer className={styles.footer}>
       <p>Copyright 2022 Mindworks</p>
     </footer>
    </div>
  )
}

export default Layout