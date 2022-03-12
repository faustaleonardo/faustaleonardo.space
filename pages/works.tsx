/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Image from 'next/image';
import Container from '../components/Container';
import Layout from '../components/Layout';
import MobileMenu from '../components/MobileMenu';
import useIsMobileMenuOpened from '../hooks/useIsMobileMenuOpened';
import useIsMounted from '../hooks/useIsMounted';
import { THUMBNAILS } from '../lib/constants';

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

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
              {THUMBNAILS.map(({ link, imageUrl, name }, index) => (
                <a
                  href={link}
                  key={name}
                  className="w-full block shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  target="_blank"
                >
                  <div
                    data-aos="zoom-in"
                    data-aos-delay={1000 + index * 200}
                    className="relative overflow-hidden group"
                  >
                    <img
                      src={imageUrl}
                      alt={name}
                      className="transform group-hover:scale-125 hover:opacity-25 transition duration-500 ease-out"
                    />
                    <div className="hidden group-hover:block transition duration-300 ease-in absolute inset-x-1/4 inset-y-1/2">
                      <h3 className="text-base text-gray-600 dark:text-gray-300 text-center font-bold lg:text-xl  uppercase tracking-widest border border-1 p-1 rounded border-sky-500">
                        {name}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Works;
