import Head from 'next/head';
import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rex-topiA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>

      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;