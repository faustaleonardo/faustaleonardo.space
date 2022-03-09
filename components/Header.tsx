import { useState } from 'react';
import CloseButton from './CloseButton';
import HamburgerButton from './HamburgerButton';
import NavbarMobile from './Navbar/Mobile';
import NavbarDesktop from './Navbar/Desktop';
import ThemeButton from './ThemeButton';
import Logo from './Logo';

const Header = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpened(true);
  };
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpened(false);
  };

  return (
    <header>
      {!isMobileMenuOpened ? (
        <div className="flex items-center justify-between py-6 px-8">
          <Logo />

          <div className="flex items-center">
            <NavbarDesktop />
            <ThemeButton />
            <HamburgerButton onOpenMobileMenu={handleOpenMobileMenu} />
          </div>
        </div>
      ) : (
        <div className="md:hidden w-screen h-screen flex items-center justify-center">
          <CloseButton onCloseMobileMenu={handleCloseMobileMenu} />
          <NavbarMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
