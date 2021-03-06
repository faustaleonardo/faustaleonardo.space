import React from 'react';
import HamburgerIcon from '../Icon/Hamburger';

type Props = {
  onOpenMobileMenu: () => void;
};

const HamburgerButton: React.FC<Props> = ({ onOpenMobileMenu }) => {
  return (
    <button
      className="md:hidden group w-12 h-12 flex justify-center items-center rounded-full bg-sky-500 hover:bg-white transition-all drop-shadow-lg"
      onClick={onOpenMobileMenu}
    >
      <HamburgerIcon />
    </button>
  );
};

export default HamburgerButton;
