import { Fragment } from 'react';
import MainNav from './main-nav'

import styles from './layout.module.css'

function Layout(props) {
  return (
    <Fragment className={styles.container}>
     <MainNav />
     <main>{props.children}</main>

     <footer className={styles.footer}>
       <p>Copyright 2022 BlogLife</p>
     </footer>
    </Fragment>
  )
}

export default Layout