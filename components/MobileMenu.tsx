import CloseButton from './Button/Close';
import NavbarMobile from './Navbar/Mobile';

type MobileMenuProps = {
  onCloseMobileMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ onCloseMobileMenu }) => {
  return (
    <div className="md:hidden w-screen h-screen flex items-center justify-center">
      <CloseButton onCloseMobileMenu={onCloseMobileMenu} />
      <NavbarMobile />
    </div>
  );
};

export default MobileMenu;
