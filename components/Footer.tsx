/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link';
import { MENUS, SOCIAL_MEDIA_LINK } from '../lib/constants';
import { getTitleCase } from '../lib/utils';
import EmailIcon from './Icon/Email';
import GithubIcon from './Icon/Github';
import HashNodeIcon from './Icon/Hashnode';
import HashNode from './Icon/Hashnode';
import LinkedinIcon from './Icon/Linkedin';
import TwitterIcon from './Icon/Twitter';

const Footer = () => {
  return (
    <footer className="mx-8 xl:mx-32 lg:flex lg:justify-between lg:items-start lg:my-12">
      <nav>
        <ul className="flex gap-4 py-8 lg:flex-col lg:py-0">
          {MENUS.map(({ name, path }) => (
            <li key={name}>
              <Link href={path}>
                <a className="text-base text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 hover:text-black hover:underline">
                  {getTitleCase(name)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:hidden border border-gray-200 dark:border-gray-800"></div>

      <section className="py-6 lg:py-0">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm lg:text-base lg:text-right">
          Get in touch
        </h2>
        <ul className="flex gap-7 py-6">
          <li>
            <a href={SOCIAL_MEDIA_LINK.linkedin} target="_blank">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href={SOCIAL_MEDIA_LINK.twitter} target="_blank">
              <TwitterIcon />
            </a>
          </li>
          <li className="flex gap-4">
            <a href={SOCIAL_MEDIA_LINK.github} target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li className="flex gap-4">
            <a href={SOCIAL_MEDIA_LINK.hashNode} target="_blank">
              <HashNodeIcon />
            </a>
          </li>
          <li className="flex gap-4">
            <a href={SOCIAL_MEDIA_LINK.email} target="_blank">
              <EmailIcon />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
