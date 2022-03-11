/* eslint-disable react/jsx-no-target-blank */
import { SAYURBOX_URL } from '../lib/constants';
import TechStack from './Techstack';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <h4 className="text-sky-600 dark:text-sky-300 pb-5">Hi, my name is</h4>
        <h1 className="text-5xl lg:text-7xl pb-5">Fausta Leonardo</h1>
        <h1 className="text-5xl lg:text-7xl pb-5 text-gray-500 dark:text-gray-400">
          I build things for mobile and web
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 pb-4">
          I&apos; m a software engineer specializing in mobile and web app.
          Currently, I&apos;m working as a SDE Frontend at{' '}
          <a
            href={SAYURBOX_URL}
            target="_blank"
            className="text-base text-sky-600 dark:text-sky-300 hover:underline"
          >
            Sayurbox, Indonesia 🇮🇩
          </a>
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400 pb-3">
          Here are the list of technologies I&apos;ve been working with:
        </p>

        <TechStack />
      </div>
    </section>
  );
};

export default Hero;
