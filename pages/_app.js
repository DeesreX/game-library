import styles from '../styles/globals.css';
import NavigationMenu from './navigation-menu';
import HeadFile from '../components/headfile';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadFile />
      <header className={styles.header}>
        <NavigationMenu />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;