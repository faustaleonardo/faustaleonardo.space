import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
