import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isLog, setIsLog] = useState(false);
  const [user, setUser] = useState('');

  const handleIsLogged = (props) => {
    setIsLog(props);
  }

  const handleUser = (props) => {
    setUser(props)
  }

  const handleLogout = () => {
    setIsLog(false);
  };

  return (
    <Layout isLogged={isLog} onLogout={handleLogout} user={user}>
      <Component
        {...pageProps}
        onIsLogged={handleIsLogged}
        onUser={handleUser}
        isLogged={isLog}
        user={user}
      />
    </Layout>
  );
}

export default MyApp;
