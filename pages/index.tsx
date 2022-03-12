import type { NextPage } from 'next';
import Layout from '../components/Layout';
import useIsMounted from '../hooks/useIsMounted';
import Hero from '../components/Hero';
import useIsMobileMenuOpened from '../hooks/useIsMobileMenuOpened';
import MobileMenu from '../components/MobileMenu';
import Timeline from '../components/timeline';
import Container from '../components/Container';

const Home: NextPage = () => {
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
