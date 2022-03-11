import NavbarDesktop from './Navbar/Desktop';
import Logo from './Logo';
import ThemeButton from './Button/Theme';
import HamburgerButton from './Button/Hamburger';

type HeaderProps = {
  onOpenMobileMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu }) => {
  return (
    <header className="absolute min-w-full">
      <div className="flex items-center justify-between py-6 mx-8">
        <Logo />

        <div className="flex gap-4 items-center">
          <NavbarDesktop />
          <ThemeButton />
          <HamburgerButton onOpenMobileMenu={onOpenMobileMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
