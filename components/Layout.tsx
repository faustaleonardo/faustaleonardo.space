import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  onOpenMobileMenu: () => void;
};

const Layout: React.FC<LayoutProps> = ({ children, onOpenMobileMenu }) => {
  return (
    <>
      <Meta />
      <Header onOpenMobileMenu={onOpenMobileMenu} />
      <main>{children}</main>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
