import type { NextPage } from 'next';
import Layout from '../components/Layout';
import useIsMounted from '../hooks/useIsMounted';

const Works: NextPage = () => {
  const { isMounted } = useIsMounted();

  if (!isMounted) return null;

  return (
    <Layout>
      <h1>Hello this is works</h1>
    </Layout>
  );
};

export default Works;
