import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getData } from './api';

// TODO: remove later
type Props = {
  data: any[];
};

const Home: NextPage<Props> = ({ data }) => {
  // TODO: remove later
  console.log(data);

  return (
    <div>
      <Head>
        <title>Fausta Leonardo</title>
        <meta name="description" content="fausta leonardo's porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold">Hello world</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = () => {
  const data = getData();

  return {
    props: { data },
  };
};
