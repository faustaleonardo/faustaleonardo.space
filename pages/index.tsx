import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fausta Leonardo</title>
        <meta name="description" content="fausta leonardo's porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-2xl font-bold">Hello world</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
