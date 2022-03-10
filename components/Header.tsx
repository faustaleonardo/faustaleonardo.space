import { useState } from 'react';
import CloseButton from './Button/Close';
import NavbarMobile from './Navbar/Mobile';
import NavbarDesktop from './Navbar/Desktop';
import Logo from './Logo';
import ThemeButton from './Button/Theme';
import HamburgerButton from './Button/Hamburger';

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
        <div className="flex items-center justify-between py-6 mx-8">
          <Logo />

          <div className="flex gap-4 items-center">
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
