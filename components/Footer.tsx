/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link';
import { MENUS, SOCIAL_MEDIA_LINK } from '../lib/constants';
import { getTitleCase } from '../lib/utils';
import EmailIcon from './Icon/Email';
import GithubIcon from './Icon/Github';
import HashNodeIcon from './Icon/Hashnode';
import LinkedinIcon from './Icon/Linkedin';
import TwitterIcon from './Icon/Twitter';

const socialMediaSwitchIcon: Record<string, JSX.Element> = {
  linkedin: <LinkedinIcon />,
  twitter: <TwitterIcon />,
  github: <GithubIcon />,
  hashNode: <HashNodeIcon />,
  email: <EmailIcon />,
};

const Footer = () => {
  return (
    <footer className="lg:flex lg:justify-between lg:items-start lg:my-12">
      <nav>
        <ul className="flex gap-4 py-8 lg:flex-col lg:py-0">
          {MENUS.map(({ name, path }) => (
            <li key={name}>
              <Link href={path}>
                <a className="text-base custom-link">{getTitleCase(name)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:hidden border border-gray-200 dark:border-gray-800" />

      <section className="py-6 lg:py-0">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm lg:text-base lg:text-right">
          Get in touch
        </h2>
        <ul className="flex gap-7 py-6">
          {Object.keys(SOCIAL_MEDIA_LINK).map((key) => (
            <li key={key}>
              <a href={SOCIAL_MEDIA_LINK[key]} target="_blank">
                {socialMediaSwitchIcon[key]}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
