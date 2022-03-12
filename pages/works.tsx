/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Container from '../components/Container';
import Layout from '../components/Layout';
import MobileMenu from '../components/MobileMenu';
import WorkList from '../components/Work/List';
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
      <section className="pt-40 flex flex-col justify-center">
        <div className="bg-gray-100 dark:bg-gray-900 py-20">
          <Container>
            <h1 data-aos="fade-up" className="text-3xl lg:text-5xl pb-6">
              Some things I&apos;ve built
            </h1>
            <WorkList />
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Works;
