import Link from 'next/link';
import React from 'react';
import { MENUS } from '../../lib/constants';

const NavbarMobile = () => {
  return (
    <nav>
      <ul>
        {MENUS.map(({ name, path }) => (
          <li key={name}>
            <Link href={path}>
              <a className="block my-5 font-bold text-center text-2xl text-gray-900 dark:text-white tracking-normal hover:tracking-widest hover:text-sky-500 dark:hover:text-sky-500 transition-all">
                {name.toUpperCase()}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
