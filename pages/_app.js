import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isLog, setIsLog] = useState(false);
  const [user, setUser] = useState('');
  // const [name, setName] = useState('');
  const handleIsLogged = (props) => {
    setIsLog(props);
    console.log(props);
  };

  const handleUser = (props) => {
    setUser(props)
    console.log(props)
  }

  // const handleName = (props) => {
  //   setName(props);
  //   console.log(props);
  // };

  const handleLogout = () => {
    setIsLog(false);
  };

  return (
    <Layout isLogged={isLog} onLogout={handleLogout} user={user}>
      <Component
        {...pageProps}
        onIsLogged={handleIsLogged}
        onUser={handleUser}
        // onLoggedName={handleName}
        isLogged={isLog}
        user={user}
      />
    </Layout>
  );
}

export default MyApp;
