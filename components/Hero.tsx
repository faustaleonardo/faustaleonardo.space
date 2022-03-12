/* eslint-disable react/jsx-no-target-blank */
import { SAYURBOX_URL } from '../lib/constants';
import TechStack from './TechStack';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <div data-aos="fade-up">
          <h4 className="text-sky-600 dark:text-sky-300 pb-5">
            Hi, my name is
          </h4>
          <h1 className="text-5xl lg:text-7xl pb-5">Fausta Leonardo</h1>
          <h1 className="text-5xl lg:text-7xl pb-5 text-gray-500 dark:text-gray-400">
            I build things for mobile and web
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 pb-4">
            I&apos;m a software engineer specializing in mobile and web app.
            Currently, I&apos;m working as a SDE Frontend{' '}
            <a
              href={SAYURBOX_URL}
              target="_blank"
              className="text-base custom-link"
            >
              @Sayurbox
            </a>
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 pb-3">
            Here are the list of technologies I&apos;ve been working with:
          </p>
        </div>
        <TechStack />
      </div>
    </section>
  );
};

export default Hero;
