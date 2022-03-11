import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { getData } from './api';
import useIsMounted from '../hooks/useIsMounted';
import Hero from '../components/Hero';
import GradientBackground from '../components/GradientBackground';
import CloseButton from '../components/Button/Close';
import NavbarMobile from '../components/Navbar/Mobile';
import { useState } from 'react';
import useIsMobileMenuOpened from '../hooks/useIsMobileMenuOpened';
import MobileMenu from '../components/MobileMenu';

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
      <Hero />
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
