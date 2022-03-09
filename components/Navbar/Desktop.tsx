import Link from 'next/link';
import React from 'react';
import { MENUS } from '../../lib/constants';
import { getTitleCase } from '../../lib/utils';

const NavbarDesktop = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex">
        {MENUS.map(({ name, path }) => (
          <li key={name} className="w-24">
            <Link href={path}>
              <a className="block my-5 font-bold text-base text-center text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-500 hover:tracking-widest hover:text-sky-500 transition-all">
                {getTitleCase(name)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
