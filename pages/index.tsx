import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { getData } from './api';
import useIsMounted from '../hooks/useIsMounted';
import Hero from '../components/Hero';
import useIsMobileMenuOpened from '../hooks/useIsMobileMenuOpened';
import MobileMenu from '../components/MobileMenu';
import Timeline from '../components/Timeline';
import Container from '../components/Container';

// TODO: remove later
type Props = {
  data: any[];
};

const Home: NextPage<Props> = (props) => {
  const { isMounted } = useIsMounted();
  const { isMobileMenuOpened, handleCloseMobileMenu, handleOpenMobileMenu } =
    useIsMobileMenuOpened();

  if (!isMounted) return null;

  return isMobileMenuOpened ? (
    <MobileMenu onCloseMobileMenu={handleCloseMobileMenu} />
  ) : (
    <Layout onOpenMobileMenu={handleOpenMobileMenu}>
      <Container>
        <Hero />
      </Container>
      <Timeline />
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
