import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { getData } from './api';
import useIsMounted from '../hooks/useIsMounted';
import Hero from '../components/Hero';
import GradientBackground from '../components/GradientBackground';

// TODO: remove later
type Props = {
  data: any[];
};

const Home: NextPage<Props> = (props) => {
  const { isMounted } = useIsMounted();

  if (!isMounted) return null;

  return (
    <>
      <Layout>
        <Hero />
      </Layout>
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
