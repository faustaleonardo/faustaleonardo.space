import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MobileMenu from '../components/MobileMenu';
import useIsMobileMenuOpened from '../hooks/useIsMobileMenuOpened';
import useIsMounted from '../hooks/useIsMounted';

const Works: NextPage = () => {
  const { isMounted } = useIsMounted();
  const { isMobileMenuOpened, handleOpenMobileMenu, handleCloseMobileMenu } =
    useIsMobileMenuOpened();

  if (!isMounted) return null;

  return isMobileMenuOpened ? (
    <MobileMenu onCloseMobileMenu={handleCloseMobileMenu} />
  ) : (
    <Layout onOpenMobileMenu={handleOpenMobileMenu}>
      <h1>works</h1>
    </Layout>
  );
};

export default Works;
