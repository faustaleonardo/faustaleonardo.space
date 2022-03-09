import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { getData } from './api';

// TODO: remove later
type Props = {
  data: any[];
};

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Header />
    </>
  );
};
export default Home;

// TODO: remove later
export const getStaticProps: GetStaticProps = () => {
  const data = getData();

  return {
    props: { data },
  };
};
