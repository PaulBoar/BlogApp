import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
 const [isLog, setIsLog] = useState(false)
 const [name, setName] = useState('')
const handleIsLogged = (props) => {
   setIsLog(props)
   console.log(props)
}

const handleName = (props) => {
  setName(props)
  console.log(props)
}

const handleLogout = () => {
  setIsLog(false)
}

  return (
     <Layout isLogged={isLog} name={name} onLogout={handleLogout}>
      <Component {...pageProps} onIsLogged={handleIsLogged} onLoggedName={handleName} logout={isLog} />
      </Layout>  
  );
}

export default MyApp;
