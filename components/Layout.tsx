import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {/* TODO: later */}
      <main>{children}</main>

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
