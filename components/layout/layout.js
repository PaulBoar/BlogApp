import { Fragment } from 'react';
import MainNav from './main-nav'

import styles from './layout.module.css'

function Layout(props) {
  console.log(props.isLogged)

  const handleLogout = () => {
    props.onLogout()
  }
  return (
    <div className={styles.container}>
     <MainNav logged={props.isLogged} name={props.name} onLogout={handleLogout}/>
     <main>{props.children}</main>

     <footer className={styles.footer}>
       <p>Copyright 2022 BlogLife</p>
     </footer>
    </div>
  )
}

export default Layout