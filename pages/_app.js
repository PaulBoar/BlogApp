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

  return (
     <Layout isLogged={isLog} name={name}>
      <Component {...pageProps} onIsLogged={handleIsLogged} onLoggedName={handleName} />
      </Layout>  
  );
}

export default MyApp;
