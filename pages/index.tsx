import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { getData } from './api';
import useIsMounted from '../hooks/useIsMounted';

// TODO: remove later
type Props = {
  data: any[];
};

const Home: NextPage<Props> = (props) => {
  const { isMounted } = useIsMounted();

  if (!isMounted) return null;

  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
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
