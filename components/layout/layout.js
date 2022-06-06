import { Fragment } from 'react';
import MainNav from './main-nav'

function Layout(props) {
  return (
    <Fragment>
     <MainNav />
     <main>{props.children}</main>

     <footer>
       <p>Copyright 2022 BlogLife</p>
     </footer>
    </Fragment>
  )
}

export default Layout