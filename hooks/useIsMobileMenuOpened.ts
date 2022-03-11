import { useState } from 'react';

const useIsMobileMenuOpened = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpened(true);
  };
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpened(false);
  };

  return { isMobileMenuOpened, handleOpenMobileMenu, handleCloseMobileMenu };
};

export default useIsMobileMenuOpened;
