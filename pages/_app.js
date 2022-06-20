import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    loading && (
      <div className='spinner-wrapper'>
        <div className='spinner'></div>
      </div>
    )
  );
}

function MyApp({ Component, pageProps }) {
  const [isLog, setIsLog] = useState(false);
  const [user, setUser] = useState('');

  const handleIsLogged = (props) => {
    setIsLog(props);
  };

  const handleUser = (props) => {
    setUser(props);
  };

  const handleLogout = () => {
    setIsLog(false);
  };

  return (
    <>
      <Head>
        <meta
          http-equiv='Content-Security-Policy'
          content="default-src 'self' https: ; object-src 'none'"
        />
      </Head>
      <Layout isLogged={isLog} onLogout={handleLogout} user={user}>
        <Loading />
        <Component
          {...pageProps}
          onIsLogged={handleIsLogged}
          onUser={handleUser}
          isLogged={isLog}
          user={user}
        />
      </Layout>
    </>
  );
}

export default MyApp;
